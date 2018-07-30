# History and Location object.

```javascript
window.location
```

- pathname: folder.
- search: query string.
- hostname: the current hostname.
- hash: old style for url patterns.


```javascript
window.history.length // total object into history
window.history.pushState({ a: 2 }, 'My testing url', '/testing');
```

## Example
```javascript
window.body.innerHTML=`
<div>
  <ul>
    <li><a href="/profile" id="link1">Profile</a> | <a href="/movies" id="link2">Movies</a></li>
  </ul>
</div>
<br />
<br />
<div id="display"></div>

`;

const showLink1 = () => (`
  <strong>My profile</strong>
  `);

const showLink2 = () => (`
  <strong>Movies</strong>
  `);


const links = {
  'link1': {
    cb: () => showLink1(),
    title: 'Profile',
    url: '/profile',
  },
  'link2': {
    cb: () => showLink2(),
    title: 'movies',
    url: '/movies',
  },
};

Object.entries(links).forEach(link => {
  document.getElementById(link[0]).addEventListener('click', (event) => {
    event.preventDefault();
    window.history.pushState({}, link[1].title, link[1].url);
    document.getElementById('display').innerHTML = link[1].cb();
  });  
});


```


# React Router

Documentation: (https://github.com/ReactTraining/react-router/blob/v3/docs/guides/RouteConfiguration.md)

## Challenge
```javascript
const AppContainer = ({ location }) => (
    <ConnectedSwitch>
        <Route path="/" component={TodosList}>
          <Route path="about" component={ContainerAbout} />
          <Route path="todoslist/:id" component={ContainerEmpty}>
            <Route path="todoslist/:todolistId/:taskId" component={ContainerEmpty} />
          </Route>
        </Route>
        <Route component={Show404}/>
    </ConnectedSwitch>
);
```

- Do works all paths.
- Add menu header
