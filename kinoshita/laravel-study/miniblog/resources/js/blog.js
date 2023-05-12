const editBtn = document.getElementById('edit_blog_btn')
const deleteBtn = document.getElementById('delete_blog_btn')
const addBlogForm = document.getElementById('add_blog_form')

editBtn.onclick = async () => {
    // まだ
}

deleteBtn.onclick = async (event) => {
    if(!window.confirm('本当にこの投稿を削除しますか？')) return

    const blog_id = event.target.value

    try {
        fetch(`blog/${blog_id}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
            }
        })
    
        location.href = '/blog'
    } catch (error) {
        addBlogForm.insertAdjacentHTML('beforeend', errorMsgElm('ERROR:送信できませんでした'))
        return
    }
}

function errorMsgElm(message){
    return `<h2 style="color:red">${message}</h2>`
}
