> PARADIGM: "Open Book Exam" aka Reference module-docs mentality

<br>

1. What is Networking from dev perspective

- <img src="image%20notes/2%20developer%20perspective.png" width="500">
     <br>
     <br>

2. How packet are sent over, dev perspective

- <img src="image%20notes/1%20data%20transfer%20in%20packet.png" width="500">
   <br>
   <br>

3. Feature of UDP

- <img src="image%20notes/4%20UDP%20feature.png" width="500">
     <br>
     <br>

4. Feature of TCP

- <img src="image%20notes/5%20TCP%20feature.png" width="500">
   <br>
   <br>

5. TCP vs UDP

- <img src="image%20notes/6%20TCP%20vs%20UDP.png" width="500">
   <br>
   <br>

6. Http can send following stuff, in-forms of packets to other browser from server

- <img src="image%20notes/8%20http%20can%20send%20following%20.png" width="500">
     <br>
     <br>

7. How do http msg look like

```
// http message layout
// 1. start-line
// 2. header
// 3. body
```

- <img src="image%20notes/9%20how%20do%20http%20msg%20look%20like.png" width="500">
     <br>
     <br>

8. How to do curl in Vs code Terminal

```
   curl -v www.google.com
```

- <img src="image%20notes/11%20curl%20request.png" width="500"><br>
- <img src="image%20notes/15%20format%20of%20start%20line.jpg">
     <br>
     <br>
- Http message start line, request send from curl-client/browser to google server
- <img src="image%20notes/12%20http%20msg%20start%20line.png" width="500">
     <br>
     <br>
- Http message headers received from google server
- <img src="image%20notes/13%20http%20msg%20headers.png" width="500">
     <br>
     <br>
- Http body received from google server: Here is the text or binary stuff
- <img src="image%20notes/14%20http%20msg%20body.png" width="500">
     <br>
     <br>
   
   <br>
   <br>

9. How to create native http server using [http module](https://www.w3schools.com/nodejs/nodejs_http.asp "mdn")
   <br>
   <br>
10. What are the most common [mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types "mdn") use in http headers
    <br>
    <br>

# Notice

1. The server will responce with its callback

- the http module has a createServer method
- takes 1 arg:
- 1. callback, callback, has 2 args: req, res
- Rocket function (res, req => { Server do this })

```
const server = http.createServer((req, res)=>{

     res.write('J home page');
     res.end();

});

```
