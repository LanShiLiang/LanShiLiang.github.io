    let toggleAllInput = document.querySelector('#toggle-select-all')
    let todoInput = document.querySelector('#todo-input')
    let todoList = document.querySelector('#todo-list')
    let stateWrap = document.querySelector('.state')
    let leftCount = document.querySelector('.left-count')
    let clearCompletedBtn = document.querySelector('#clear-completed')
    let categorySelect = document.querySelector('#category-select')

    //类别选择
    categorySelect.onclick = e => {
      if (e.target.matches('input')) {
        debugger
        console.log(e)
        //删除原先类名再添加目前选中的类名
        todoList.classList.remove('all', 'active', 'completed')
        todoList.classList.add(e.target.value)
      }
    }

    //全选按钮
    toggleAllInput.onclick = e => {
      let completeds = todoList.querySelectorAll('li.completed')
      if (completeds.length == todoList.children.length) {
        Array.from(todoList.children).forEach(it => {
          it.classList.remove('completed')
          it.firstElementChild.checked = false
        })
      } else {
        Array.from(todoList.children).forEach(it => {
          it.classList.add('completed')
          it.firstElementChild.checked = true
        })
      }
      setSelectAllAndLeftCountAndClearBtn()
      save()
    }

    todoInput.onkeyup = function (e) {
      // console.log(e)
      // let todo = this.value
      if (e.key === "Enter") {
        addTodo({
          content: e.target.value.trim(),
          completed: false,
        })
        e.target.value = ''
        save()
      }
    }

    clearCompletedBtn.onclick = e => {
      let tobeDeleted = document.querySelectorAll('.completed')
      tobeDeleted.forEach(it => {
        todoList.removeChild(it)
      })
      clearCompletedBtn.style.display = 'none'
    }

    //关联已完成与未完成的条目，同步更新全选按钮、底部待办事项计数器。
    function setSelectAllAndLeftCountAndClearBtn() {
      let actives = todoList.querySelectorAll('input:first-child:not(:checked)')
      let completeds = todoList.querySelectorAll('input:first-child:checked')
      if (actives.length) {
        toggleAllInput.checked = false
      } else {
        toggleAllInput.checked = true
      }
      leftCount.textContent = actives.length + " items left"
      if (completeds.length) {
        clearCompletedBtn.style.display = 'inline-block'
      } else {
        clearCompletedBtn.style.display = 'none'
      }
    }


    let todos = JSON.parse(localStorage.todos) || []

    todos.forEach(todo => {
      addTodo(todo)
    })


    function addTodo(todo) {
      let todoText = todo.content
      if (todoText.trim() !== '') { //去除首尾空格判断是否为空文本
        this.value = ''
        let li = document.createElement('li')
        li.classList.add('todo-item') //给新建的清单表项加样式
        todo.completed && li.classList.add('completed')
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = todo.completed
        checkbox.onchange = e => {
          if (checkbox.checked) {
            li.classList.add('completed')
          } else {
            li.classList.remove('completed')
          }
          setSelectAllAndLeftCountAndClearBtn()
          save()
        }

        let span = document.createElement('span')
        span.textContent = todoText
        span.ondblclick = e => {
          li.classList.add('editing')
          setTimeout(() => {
            editBox.focus()
          })
        }

        let editBox = document.createElement('input')
        editBox.type = 'text'
        editBox.value = todoText //匹配输入的文本
        editBox.onkeyup = e => {
          if (e.key == 'Enter') {
            span.textContent = editBox.value
            li.classList.remove('editing')
            save()
          }
        }
        editBox.onblur = e => {
          span.textContent = editBox.value
          li.classList.remove('editing')
          save()
        }

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'x'
        //删除条目
        deleteBtn.onclick = e => {
          todoList.removeChild(li)
          setSelectAllAndLeftCountAndClearBtn()
          if (todoList.children.length == 0) {
            // stateWrap.style.display = 'none'
          }
          save()
        }

        li.append(checkbox, span, editBox, deleteBtn)
        todoList.append(li)
        // stateWrap.style.display = 'block'
        setSelectAllAndLeftCountAndClearBtn()
      }
    }

    function save() {
      let todos = Array.from(todoList.children).map(li => {
        return {
          completed: li.firstElementChild.checked,
          content: li.firstElementChild.nextElementSibling.textContent,
        }
      })
      console.log(todos)
      localStorage.todos = JSON.stringify(todos)
    }
