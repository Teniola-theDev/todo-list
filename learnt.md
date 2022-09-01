# What I learnt

How to make a list appear in horizontal mode

```
give the li, not the ul a display inline

.links li {
  border: 1px solid red;
  display: inline;
}
```

How to style placeholder

```
.input-bar::placeholder {

}


```

To add padding to placeholder, add spacing to the input bar itself not the placeholder attribute.

Remove the dark black bar

```
.input-bar:focus {
  outline: none;
}
```
