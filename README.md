# Node.js with Fila System and JSON.
**TODO**

- [x] Read a data using file system `fs.readFile()`.
- [ ] Create a data using file system `fs.writeFile()`.

#
## JSON File 
For data using a JSON File.

1. Create a json file called _free.json_.
2. Add a data using a array.

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
## File System Read a JSON File
Read a JSON Files using `fs.readFile()`.

1. Load a fs(file-system) module.
 
   ```js
   const fs = require('fs');
   ```
3. Add a `app.get()` method.
   ```js
   app.get('/' , (req, res) => {

   })
   ```
3. To read the file _**free.json**_ using `fs.readFile()` to read a content.
    ```js
    fs.readFile('./free.json' , 'utf-8' , (err, data) => {
        if(err) throw err;

        console.log(data);
    })
    ```
    :warning: Run a program `npm start`.

    :no_entry: Output in terminal.
    ```console
    ```

    
4. Declare a variable and parses data into an object.
   ```js
   const read = JSON.parse(data);
   ```
5. Add `res.render()` function to render a web page with the data on it.
    ```js
    res.render('index' , {data : read});
    ```
6. Go to _index.ejs_, create a table with 3 columns.
    ```html
    <table>
        <tr>
            <th>Name</th>
            <th>Media</th>
            <th>Year</th>
        </tr>
    </table>
    ```
7. To view a data will using ejs template. Create a **for loop** that iterate through the **data** array with create a table with 3 columns.
   ```html
    <% for(var i=0; i < data.length; i++) { %>
            <tr>
                <td><%= data[i].name %></td>
                <td><%= data[i].media %></td>
                <td><%= data[i].year %></td>
            </tr>
    <% } %>
    ```
    :warning: 3 columns same with property of JSON file.
8. Run a app `npm start`. Run to browser **localhost:8080**.

#