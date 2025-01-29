let IU_BOARD = document.getElementById('iu');
IU_BOARD.addEventListener('click', function handleClick() {
    // fetch IU bulletinboard Information.
    // POST (TITLE, COMMENTS, DATE, WRITER)
    
    fetch('http://dgnet.com/iu/').then(
        (req) => {
            let posts = req;
            // 아래는 post의 예시
        //     [
        //         {
        //             title: 'IU 요번 콘서트 예매한 새끼 잇냐?',
        //             contents: '아 학원가느라 예매못함개빡치네',
        //             writer: '급식팬'
        //         },
        //         {
        //             title: 'IU 요번 콘서트 예매한 새끼 잇냐?',
        //             contents: '아 학원가느라 예매못함개빡치네',
        //             writer: '급식팬'
        //         },
        //         {
        //             title: 'IU 요번 콘서트 예매한 새끼 잇냐?',
        //             contents: '아 학원가느라 예매못함개빡치네',
        //             writer: '급식팬'
        //         }
        //     ]
        // }

        let x = document.getElementById('contents');

        post.array.forEach(element => {
            x.appendChild(
                <div class="board-title">
                    element.title
                </div>
                <div class="write">element.writer</div>
            )
        });
    )
});
