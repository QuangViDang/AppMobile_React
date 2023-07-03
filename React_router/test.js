const check = async () => {
    await new Promise((res) => setTimeout(res, 5000))
    console.log(0)
}
check()
console.log('1')
