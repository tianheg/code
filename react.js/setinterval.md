# Use setInterval() in React

```js
import { useState, useEffect } from 'react';

function App() {
  const [currentTime, updateTime] = useState(new Date().toLocaleTimeString('en-US'))

  useEffect(() => {
    let timer = setInterval(() => {
      updateTime(new Date().toLocaleTimeString('en-US'))
    }, 1000);
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
        <p>现在是 {currentTime}.</p>
    </div>
  );
}

export default App;
```