console.log('JS là đơn tiến trình và chạy ');


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log('\nFETCH: ', typeof(data), data))
  .catch(error => console.error(error));


console.log('async/await =====> Biến bất đồng bộ thành đồng bộ');


const fetchUserData = async () => {
    console.log('Start');
    const reponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await reponse.json();
    console.log('data: ', data, typeof(data));
    
    console.log('end!');
    return data;
};

try {
    fetchUserData();
} catch (error){
    console.log('Error');
    console.log(error);
}
