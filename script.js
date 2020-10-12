// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA);

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
console.log(generateNewTweet());

// dataComments()는 기존 트윗을 출력합니다.
function dataComments() {

    for(let i = 0; i < DATA.length; i++) {

        let liComment = document.createElement('li');
            liComment.className = 'comment';

        let userName = document.createElement('div');
            userName.className = "user";
        let msg = document.createElement('div');
            msg.className = "message";
        let date = document.createElement('div');
            date.className = "date";

        userName.innerHTML = DATA[i].user;
        msg.innerHTML = DATA[i].message;
        date.innerHTML = DATA[i].created_at;

        liComment.appendChild(userName);
        liComment.appendChild(msg);
        liComment.appendChild(date);

        comments.appendChild(liComment);
    }
}
dataComments();

// 유사배열인 comments.children을 배열로 변경시켜줍니다.
var commentsArray = Array.prototype.slice.call(comments.children);

// newTweet()은 random하게 새로운 트윗을 가져옵니다.
let checkbtn = document.querySelector('#checkbtn');
function newTweet() {

    checkbtn.onclick = function() {
        let randomComment = document.createElement('li');
            randomComment.className = 'comment';

        let randomName = document.createElement('div');
            randomName.className = 'user';
        let randomMsg = document.createElement('div');
            randomMsg.className = 'message';
        let randomDate = document.createElement('div');
            randomDate.className = 'date';
        
        randomName.innerHTML = generateNewTweet().user;
        randomMsg.innerHTML = generateNewTweet().message;
        randomDate.innerHTML = generateNewTweet().created_at.format();

        randomComment.appendChild(randomName);
        randomComment.appendChild(randomMsg);
        randomComment.appendChild(randomDate);

        comments.prepend(randomComment);  
        commentsArray.push(randomComment);  
    }
}
newTweet();


// newComments()는 새로운 트윗을 출력합니다.
function newComments() {

    let tweetbtn = document.querySelector('#tweetbtn');
    tweetbtn.onclick = function() {
        let namebox = document.querySelector('#namebox');
        let messagebox = document.querySelector('#messagebox');
        let newDate = new Date();

        let newComment = document.createElement('li');
            newComment.className = 'comment';
        let user = document.createElement('div');
            user.className = 'user';
        let message = document.createElement('div');
            message.className = 'message';
        let date = document.createElement('div');
            date.className = 'date';

        user.innerHTML = namebox.value;
        message.innerHTML = messagebox.value;
        date.innerHTML = newDate.format();

        newComment.appendChild(user);
        newComment.appendChild(message);
        newComment.appendChild(date);

        comments.prepend(newComment);
        commentsArray.push(newComment);  

        namebox.value = '';
        messagebox.value = '';
    }
}
newComments();


// filter()는 트윗 작성자의 이름을 클릭하면, 해당 작성자가 입력한 트윗만을 보여줍니다. 
comments.addEventListener('click', filter, false);

function filter() {
    let commentsFilter = commentsArray.filter(ele => 
    ele.children[0].innerHTML == event.target.innerHTML);

    commentsFilter;
    comments.innerHTML = '';

    for(let i = 0; i < commentsFilter.length; i++) {
        let filterComment = document.createElement('li');
            filterComment = commentsFilter[i];
            filterComment.className = 'comment';
        let filterUser = document.createElement('div');
            filterUser = commentsFilter[i].children[0];
            filterUser.className = 'user';
        let filterMsg = document.createElement('div');
            filterMsg = commentsFilter[i].children[1];
            filterMsg.className = 'message';
        let filterDate = document.createElement('div');
            filterDate = commentsFilter[i].children[2];
            filterDate.className = 'date';

        filterComment.appendChild(filterUser);
        filterComment.appendChild(filterMsg);
        filterComment.appendChild(filterDate);

        comments.prepend(filterComment);
    }

    goBack();
}

 // go back 버튼을 누르면 이전 상태로 되돌아갑니다.
 function goBack() {

    let checknewtwt = document.querySelector('#checknewtweet');
    let returnbtn = document.createElement('button');
    checknewtwt.innerHTML = '';
    checknewtwt.appendChild(returnbtn);

    returnbtn.id = "returnbtn";
    returnbtn.innerHTML = '<span><img id="img" src="return.png"></span>' + ' go back';
    returnbtn.style.width = '130px';

    returnbtn.onclick = function() {
        comments.innerHTML = '';
        
        for(let i = 0; i < commentsArray.length; i++) {
            commentsArray[i].children[0].className = 'user';
            commentsArray[i].children[1].className = 'message';
            commentsArray[i].children[2].className = 'date';
            commentsArray[i].className = 'comment';
            comments.prepend(commentsArray[i]);
        }

        checknewtwt.innerHTML = '';
        checknewtwt.appendChild(checkbtn);
    }
 }