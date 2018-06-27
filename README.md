# iframe-remover

## Abstract
Did the website set debugger breakpoints when you open network console?

Statistically these debugger breakpoints spawn from <iframe>.

This javascript snippet helps remove iframe. 

Simple yet powerful.😝

## Compare

Some websites may use iframe to inject external content like ads, causing multiple threads spawned.

![Before Threads](/images/before-threads.png)

And CPU loading raises.

![Before](/images/before.png)

Run the app.js in console, you will see the situation mitigated.

![After Threads](/images/after-threads.png)

![After](/images/after.png)
