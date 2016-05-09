<h1> Run with babel-node and npm script</h1>
<ul>
    <li> Install Babel and babel-preset-es2015 : sudo npm install babel-cli babel-preset-es2015 </li>
    <li> Insert package.json script to "babel-node src/main.js"</li>
    <li> Add .babelrc file with following
        <pre>
            {
                "presets": [
                    "es2015"
                ],
                "plugins": []
              }
        </pre>
    </li>
    <li>run : npm test </li>
</ul>

<h1> Babel complile</h1>

<ul>
    <li>compile : babel src -d dist </li>
    <li>run : node dist/main.js</li>
</ul>

<h1> Run with babel-register</h1>

<ul>
    <li> create a file called register.js and input following
        <pre>
            require('babel-register')
            require('./main.js')
        </pre>
        Make sure that you don't require babel-register which needs compiling
    </li>
    <li> run : node src/register.js </li>
</ul>