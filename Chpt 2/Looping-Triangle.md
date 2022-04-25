## Looping a triangle
 
 Write a loop that makes seven calls to console.log to output the following triangle:
```javascript
# 
## 
### 
#### 
#####
###### 
#######
```

It may be useful to know that you can find the length of a string by writing .length after it.

```javascript
let abc = "abc"; 
console.log(abc.length); // → 3
```

### Solution

```javascript
/*It's required that we use the length property of strings*/

for(let hash = "#"; hash.length < 8; hash += "#"){
	console.log(hash)
}

//Another way to solve the problem?
let hash = "#";
for(let num = 0; num < 7; num++){
	console.log(hash);
	hash += "#"
}
```
