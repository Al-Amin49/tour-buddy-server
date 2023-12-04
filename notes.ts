/*
Have to Watch again requirement Analysis part-3 and part-4

- process-env.d.ts akta type declaration file
-use jokoni dekbo tokon e bujbo sheta akta middleware hisebe kaj kortese
-Backend a project start korar more important things is requirement analysis
-Referencinng vs embedding
-child referencing(just for read temon beshi write and update na korle eita valo)
    -atar valo dik valo performance read operation dibe
- Parent referencing (prochure read write hole child referencing uchit na)

****When to embedding when referencing(details in gpt)

Definition: Embedding involves storing one document inside another as a subdocument or an array of subdocuments.
Definition: Referencing involves storing a reference (usually an ObjectId) to another document.
#Whent to use Each
Embedding: Use when there is a one-to-one or one-to-few relationship and the embedded data doesn't change often. Suitable for cases like embedding comments in a blog post document.

Referencing: Use when there is a one-to-many or many-to-many relationship, or when the related data is frequently updated. Suitable for cases like referencing users in a blog post document.

*/