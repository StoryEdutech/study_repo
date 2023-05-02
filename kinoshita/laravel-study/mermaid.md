mermaid sample

https://mermaid.js.org/

```
{user}    {Post}     {comment}     
id         id         id  
name       user_id    post_id
email      content    user_id  
password   title      content
```

```mermaid
flowchart LR

user -- hasMany --> post & comment
post -- hasMany --> comment
comment -- belongsTo --> post
comment & post -- belongsTo --> user

```
