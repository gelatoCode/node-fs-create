# Node.js with Fila System and JSON.
TODO : Add data to **JSON** file and view a data in ejs with use File System.
Purpose: Free! Anime about name, movie, and year.

## JSON

1. Create a new file JSON called **free.json**
2. In side file, add a data.
   ```json
   [
        {
            "name" : "Free!",
            "media" : "Anime",
            "year" : 2014
        }
    ]
    ```
#

## File System Read a data

:no_entry: **app.js**

1. Load a file system module.
   
   ```js
   const fs = require('fs')
   ```
2. In side app.js, add `app.get()` method.
   ```js
   app.get('/read' , (req, res) => {

   })
   ```
   :warning: `/read` become path of url read a data.

3. Add file system read code inside `app.get()`.
    ```js
    fs.readFile('./free.json', 'utf-8' , (err, data) => {
        if (err) throw err;

        console.log(data);
    })
    res.send('done');
    ```
4. Run a program `npm start`. Run in browser **localhost:8080**. Output in terminal.
   ```console
   [
        {
            "name" : "Free!",
            "media" : "Anime",
            "year" : 2014
        }
    ]
   ```
5. Right now, create a file ejs to display data in browser.
6. Add this code.
   ```js
    fs.readFile('./free.json', 'utf-8' , (err, data) => {
        if (err) throw err;

        const read = JSON.parse(data);

        res.render('index', {data : read});
    })
    ```
    :warning: Delete a `res.send()` and `console.log('done')`.

    :warning: Declare a `read` to be `JSON.parse(data)`. Add `res.render('index', {data : read});` to send a data in browser.
7. In **index.ejs**, use **for loop** to make a **table** tag automatic add data.
   ```html 
    <table>
        <tr>
            <th>Name</th>
            <th>Media</th>
            <th>Year</th>
        </tr>
        <% for(var i=0; i < data.length; i++) { %>
            <tr>
                <td><%= data[i].name %></td>
                <td><%= data[i].media %></td>
                <td><%= data[i].year %></td>
            </tr>
        <% } %>
    </table>
    ```
8. Done. Run a app, `npm start`. Run into **localhost:8080**





