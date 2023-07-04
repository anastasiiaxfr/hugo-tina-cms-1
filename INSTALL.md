0. add Hugo template to git and connect to https://www.netlify.com/
1. npx @tinacms/cli@latest init
2. go to https://app.tina.io/ and config New Project from Hugo
3. Add all tokens (Content (Readonly))
4. npx tinacms dev -c "hugo server -D -p 1313" 
http://localhost:1313/admin looks like this http://joxi.ru/E2p0aV8tjqyXX2
5. pull it's all to git
6. add to netlify.toml build command:
```tinacms build && hugo --gc --minify```


