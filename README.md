# Utilização

Entrar na pasta `src` e rodar:
```
node index.js
```


Essa implementação ainda não está utilizando o redis. Ou seja, ao reiniciar o servidor (node) vai perder tudo o que foi editado.

Uma parte importante do POC é conseguir detectar o que foi modificado por um usuário para poder notificar o outro ou impedir alguma mudança caso estejam ao mesmo tempo em uma mesma cena.
