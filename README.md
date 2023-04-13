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
    [
        {
            "name" : "Free!", 
            "media" : "Anime",
            "year" : 2014     
        }
    ]
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
## File System Write to JSON File
Add a data to JSON File.

1. Create a `app.post()` method and GET request for the URL with path _/view_.
   
   ```js 
   app.post('/view' , (req, res) => {

   })
   ```
2. Copy a code `fs.readFile()` .
   ```js
       fs.readFile('./free.json', 'utf-8' , (err, data) => {
        if (err) throw err;

        const read = JSON.parse(data);

        res.render('index', {data : read});
        console.log(data);
    })
    ```
3. Before that, install a **body-parse** to a request a data with form.
   
   ```console
   $ npm install body-parse
   ```
4. Load a body parser module.
   
   ```js
    const bodyParser = require('body-parser');
    ```

5. Add this code in a **middleware**.
   ```js
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
   ```

6. Into a `fs.readFile()` function, declare a 3 variable it is name, media, and year equal with `req.body` property.
   ```js 
   const {name, media, year} = req.body;
   ```
   :warning: This is for data submitted.
7. Create a variable called `allData` equal with key of variable and value.
   ```js
   const allData = {
    name : name,
    media : media,
    year : year
   }
   ```
8.  Create a `fs.writeFile()` function for add new data.

    ```js
    fs.writeFile('./free.json', JSON.stringify(read) , err => {
            if (err) throw err;
    })
    ```
9. To add data in JSON file more then one, use array push. Put this code above `fs.writeFile()` function.
    ```js
    read.push(allData);
    ```
10. Add `res.redirect()` function to render a web page.
    ```js
    res.redirect('/');
    ```
11. Create a `form` tag with 3 `input` text and 1 button submit.Put in index.ejs.
    ```html
    <form action="/view" method="POST">
        Name : <input type="text" name="name">
        Media : <input type="text" name="media" placeholder="anime @ movie">
        Year : <input type="text" name="year">
        <input type="submit">
    </form>
    ```
12. Run a app `npm start` . Run to browser **localhost:8080**.