# useClock


# useClock自定义 hook

``` js
const useClock = (initTime) => {
  const [time, setTime] = useState(initTime)

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
```

## 使用

``` shell
git clone git@github.com:Bzsheng/useClock.git

npm i

npm run dev
```

在localhost:3000中查看效果
