import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'reactjs-popup/dist/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './popup.css';
import React, { useState, useEffect } from 'react';
import './Content.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { mdata } from './data.js';
import { names } from './names.js';
import axios from 'axios';
import pp_1 from './assets/images/pp_1.jpg';
import pp_2 from './assets/images/pp_2.jpg';
import pp_3 from './assets/images/pp_3.jpg';
import pp_4 from './assets/images/pp_4.jpg';
import pp_5 from './assets/images/pp_5.jpg';
import pp_6 from './assets/images/pp_6.jpg';
import pp_7 from './assets/images/pp_7.jpg';
import pp_8 from './assets/images/pp_8.jpg';
import pp_0 from './assets/images/user.png';
import w_1 from './assets/images/w_1.jpg';
import w_3 from './assets/images/w_3.jpg';
import w_4 from './assets/images/w_4.jpg';
import w_5 from './assets/images/w_5.jpg';
import w_6 from './assets/images/w_6.jpg';
import w_7 from './assets/images/w_7.jpg';
import w_8 from './assets/images/w_8.jpg';
import w_9 from './assets/images/w_9.jpg';
import w_10 from './assets/images/w_10.jpg';
import w_11 from './assets/images/w_11.jpg';
import r_1 from './assets/images/r_1.jpg';
import m_1 from './assets/images/m_1.jpg';
import m_2 from './assets/images/m_2.jpg';
import m_3 from './assets/images/m_3.jpg';
import m_4 from './assets/images/m_4.jpg';
import m_5 from './assets/images/m_5.jpg';
import m_6 from './assets/images/m_6.jpg';
import m_7 from './assets/images/m_7.jpg';
import m_8 from './assets/images/m_8.jpg';
import m_9 from './assets/images/m_9.jpg';
import m_10 from './assets/images/m_10.jpg';
import m_11 from './assets/images/m_11.jpg';
import m_12 from './assets/images/m_12.jpg';
import m_13 from './assets/images/m_13.jpg';
import m_14 from './assets/images/m_14.jpg';
import ShowMoreText from "react-show-more-text";
import Swal from 'sweetalert2';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const tempURL = process.env.REACT_APP_NODE_URL_R;
function sendMessage(message) {
    axios.post(tempURL, message)
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}

function ContentView({ order, uid, ct, pid }) {

    const color_1 = '#1121ff'
    const color_2 = '#0d6efd'
    const instr_1 = "Imagine you are an active social media user, i.e., you use social media platforms in your daily life interactively. On this page, you will find your timeline with posts and comments from social media users and independent AI agents.";
    const instr_2 = 'Please check the posts and comments in the timeline again and tell us how trustworthy you find them and to what extend they match your opinion.';
    const instr_3 = ' For each post, please decide whether or not you would like to INTERACT with them.';
    const instr_4 = "Imagine you are an active social media user, i.e., you use social media platforms in your daily life interactively ...";
    // const tempURL = 'https://localhost:3001/register/';
    const redirectUrl = 'https://www.soscisurvey.de/user-study-smsi/index.php?i=' + ct;
    var er = 0;
    const [init, setInit] = useState(true);
    const [init2, setInit2] = useState(false);
    if (init) {
        sendMessage({ 'type': 'begin', 'uid': uid, 'ct': ct, 'pid': pid, 'order': order });
        setInit(false);
        setInit2(true);

        Swal.fire({
            title: instr_1 + instr_3,
            showCloseButton: false,
            backdrop: false,
            allowEscapeKey: false,
            animation: false,

        });
        Swal.disableButtons();
    }
    useEffect(() => {
        setTimeout(() => init2 ? Swal.enableButtons() : {}, 1000);
    }, []);

    var mainOrd = 4;
    switch (order) {
        case '1':
            mainOrd = 1;
            break;
        case '2':
            mainOrd = 2;
            break;
        case '3':
            mainOrd = 3;
            break;
        case '4':
            mainOrd = 4;
            break;
    }

    const lPostOrder_1 = [0, 1, 2]
    const lPostOrder_2 = [1, 2, 0]
    const lPostOrder_3 = [2, 0, 1]
    const lPostOrder_4s = [2, 3, 5, 6, 7, 0, 1, 4]
    //const lPostOrder_4 = [0, 1, 2, 3, 4, 5, 6, 7]
    const lPostOrder_4 = [3, 0, 6, 5, 7, 1, 4, 2]
    /*const lPostOrder_1 = [7, 3, 5, 2, 4, 0, 1, 6]
    const lPostOrder_2 = [2, 6, 3, 7, 1, 4, 5, 0]
    const lPostOrder_3 = [3, 0, 6, 5, 7, 1, 4, 2]
    const lPostOrder_4 = [2, 3, 5, 6, 7, 0, 1, 4]*/
    const lPostTzpes_1 = [1, 1, 1, 1, 1, 1, 1, 1]
    const lPostTzpes_2 = [2, 2, 2, 2, 2, 2, 2, 2]
    const lPostTzpes_3 = [3, 3, 3, 3, 3, 3, 3, 3]
    const lPostTzpes_4 = [1, 2, 3, 4, 5, 5, 5, 5]

    const lImages = [pp_5, pp_6, pp_1, pp_7, pp_2, pp_3, pp_8, pp_4]
    //const lUser = ['Mark', 'Tom', 'Suzan', 'Kevin', 'Martin', 'Hans', 'Clara', 'Isabella', 'Max', 'Angelina', 'Joseph', 'Lily', 'Emma', 'Sophia', 'Alice', 'James']
    const lUser = ['Mark', 'Tom', 'Suzan', 'Kevin', 'Lily', 'Emma', 'Martin', 'Isabella', 'Hans', 'Clara', 'Max', 'Angelina', 'Joseph', 'Sophia', 'Alice', 'James']
    const lReplyIdx = [
        [174, 300],
        [106, 300],
        [116, 300],
        [224, 300, 174, 116],
        [224, 300, 46],
        [236, 300, 108],
        [198, 300, 65],
        [136, 300, 239]
    ];
    const lReplyPIdx = [
        [m_1, r_1, r_1],
        [w_1, r_1, r_1],
        [m_1, r_1, r_1],
        [w_1, r_1, r_1],
        [r_1, r_1, w_7],
        [m_10, r_1, w_9],
        [w_10, r_1, m_1],
        [m_11, r_1, w_11]
    ];

    const defaultPp = pp_0;
    const defaultUname = "[username]";

    var lIntCnt = [
        [3, 10, 35],
        [4, 9, 36],
        [3, 11, 36],
        [5, 9, 34],
        [3, 10, 34],
        [5, 10, 33],
        [4, 11, 36],
        [4, 9, 35]
    ];


    const [shopCart, setShopCart] = useState({
        posts: [
            {
                share: 0,
                like: 0,
                bookmark: 0,
                reply: 0,
                trustRank: 0,
                opnMatch: 0,
                shareText: '',
            },
            {
                share: 0,
                like: 0,
                bookmark: 0,
                reply: 0,
                trustRank: 0,
                opnMatch: 0,
                shareText: ''
            },
            {
                share: 0,
                like: 0,
                bookmark: 0,
                reply: 0,
                trustRank: 0,
                opnMatch: 0,
                shareText: ''
            },
            {
                share: 0,
                like: 0,
                bookmark: 0,
                reply: 0,
                trustRank: 0,
                opnMatch: 0,
                shareText: ''
            },
            {
                share: 0,
                like: 0,
                bookmark: 0,
                reply: 0,
                trustRank: 0,
                opnMatch: 0,
                shareText: ''
            },
            {
                share: 0,
                like: 0,
                bookmark: 0,
                reply: 0,
                trustRank: 0,
                opnMatch: 0,
                shareText: ''
            },
            {
                share: 0,
                like: 0,
                bookmark: 0,
                reply: 0,
                trustRank: 0,
                opnMatch: 0,
                shareText: ''
            },
            {
                share: 0,
                like: 0,
                bookmark: 0,
                reply: 0,
                trustRank: 0,
                opnMatch: 0,
                shareText: ''
            }
        ]
    });

    //var repliesJson = {'accRespId_1': ['wewefwfe']}
    //const [repliesJson, setrepliesJson] = useState({'accRespId_1': ['wewefwfe']})
    const lSupReplies = ['Correct, this aligns with the report here: ', 'Exactly, as shown in this paper', 'Here is a paper supporting that', 'Backed by this study: '];
    const lConReplies = ['This paper shows otherwise: ', 'Not true, opposite findings in ', 'Refuted by this report ', 'This is inaccurate, as shown in: '];
    const [repliesJson, setrepliesJson] = useState({ 'accRespId_0': [], 'accRespId_1': [], 'accRespId_2': [], 'accRespId_3': [], 'accRespId_4': [], 'accRespId_5': [], 'accRespId_6': [], 'accRespId_7': [] });
    const [isreplied, setisreplied] = useState({ 'isrepliedId_0': false, 'isrepliedId_1': false, 'isrepliedId_2': false, 'isrepliedId_3': false, 'isrepliedId_4': false, 'isrepliedId_5': false, 'isrepliedId_6': false, 'isrepliedId_7': false });

    const [activeNext, setActiveNext] = useState(true);
    useEffect(() => {
        setTimeout(() => setActiveNext(false), 5000);
    }, []);

    const [visibleRT, setVisibleRT] = useState(false);

    const [onClickHandler, setOnClickHandler] = useState(() => firstFunction);
    function firstFunction() {
        sendMessage({ 'type': 'next_page', 'uid': uid, 'ct': ct, 'pid': pid });

        Swal.fire({
            'text': 'Please check the posts and comments in the timeline again and tell us how trustworthy you find them and to what extend they match your opinion.',
            didClose: () => window.scrollTo(0, 0)
        }).then(() => {
            window.scrollTo(0, 0);
        });
        window.scrollTo(0, 0);
        setVisibleRT(true);
        changeHandler();
    }

    function getValue(id) {
        if (null !== document.getElementById(id)) {
            var er = document.getElementById(id).value;
            console.log(er);
            return er;
        }
        return '';
    }
    function secondFunction() {

        if (null !== document.getElementById('textarea_trust_1')) {
            var er = document.getElementById('textarea_trust_1').value;
            console.log(er);
        }

        let copiedShopCart = { ...shopCart };
        var done = true;
        for (var i = 0; i < copiedShopCart.posts.length; i++) {
            console.log(i,copiedShopCart.posts[i]['trustRank'],copiedShopCart.posts[i]['opnMatch'])
            if (copiedShopCart.posts[i]['trustRank'] < 1 | copiedShopCart.posts[i]['opnMatch'] < 1) {
                done = false;
                break;
            }
        }
        if (done === false) {
            Swal.fire({
                title: 'Error!',
                text: 'Please provide trustworthy ratings and opinion matching degrees for all posts!',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        else {
            var f_data = {};
            for (var j = 0; j < copiedShopCart.posts.length; j++) {
                var textV = getValue('textarea_trust_' + j);
                copiedShopCart.posts[j]['shareText'] = textV;
                f_data[mdata.posts[lMainOrd[j]].title] = copiedShopCart.posts[j];
            }
            sendMessage({ 'type': 'end', 'ct': ct, 'pid': pid, 'uid': uid });
            //sendMessage({ 'type': 'result', 'uid': uid, 'ct': ct, 'pid': pid, 'data': copiedShopCart });
            axios.post(tempURL, { 'type': 'result_f', 'uid': uid, 'ct': ct, 'pid': pid, 'data': f_data })
                .then((response) => {
                    console.log(response);
                    window.location.replace(redirectUrl);
                }, (error) => {
                    console.log(error);
                });
            axios.post(tempURL, { 'type': 'result', 'uid': uid, 'ct': ct, 'pid': pid, 'data': copiedShopCart })
                .then((response) => {
                    console.log(response);
                    window.location.replace(redirectUrl);
                }, (error) => {
                    console.log(error);
                });
            //window.location.replace(redirectUrl);
        }
    }

    function changeHandler() {
        setOnClickHandler(() => secondFunction); // Switch to secondFunction
    }

    function ButtonShare(btnIdx) {
        const [buttonText, setButtonText] = useState(' Share');
        var btnId = 'share_btn_' + btnIdx;
        function handleClick() {
            let copiedShopCart = { ...shopCart };

            (buttonText === ' Share') ? setButtonText(' Unshare') : setButtonText(' Share');
            (buttonText === ' Share') ? copiedShopCart['posts'][btnIdx]['share'] = 1 : copiedShopCart['posts'][btnIdx]['share'] = 0;
            setShopCart(shopCart => ({
                ...copiedShopCart
            }));
            console.log(shopCart);
            console.log(btnIdx, uid);

            sendMessage({ 'type': 'share', 'uid': uid, 'ct': ct, 'pid': pid, 'index': btnIdx, data: shopCart });

        }

        return (
            <div>
                <ToggleButtonGroup type="checkbox" style={{ width: "35%" }}>
                    <ToggleButton disabled={visibleRT} variant="outline-primary" id={btnId} className="btn-lg share-1 d-flex justify-content-center position-relative end-0" style={{ width: "35%" }} onClick={handleClick}>
                        <p style={{ height: "300", marginBottom: "0", fontSize: "23px" }}>
                            <svg id='rt-icon' style={{ height: "30px", width: "30px", fill: color_1 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32l0-128 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96l112 0zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-128c0-53-43-96-96-96L304 96z" /></svg>
                            {buttonText}
                        </p>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        );
    }

    function ButtonsAll(btnIdx) {
        const [buttonShareText, setButtonShareText] = useState(' Share');
        const [iconShareColor, setIconShareColor] = useState('#ffffff');
        const [buttonBkmkText, setButtonBkmkText] = useState(' Bookmark');
        const [iconBkmkColor, setIconBkmkColor] = useState('#ffffff');
        const [buttonReplyText, setButtonReplyText] = useState(' Comment');
        const [iconReplyColor, setIconReplyColor] = useState('#ffffff');
        const [buttonLikeText, setButtonLikeText] = useState(' Like');
        const [iconLikeColor, setIconLikeColor] = useState('#ffffff');

        const [cntShare, setCntShare] = useState(lIntCnt[btnIdx][1]);
        const [cntLike, setCntLike] = useState(lIntCnt[btnIdx][2]);
        var btnShareId = 'share_btn_' + btnIdx;
        var btnLikeId = 'like_btn_' + btnIdx;
        var btnBkmkId = 'bkmk_btn_' + btnIdx;
        var btnReplyId = 'reply_btn_' + btnIdx;
        const [checked, setChecked] = useState(false);


        const [clickedReplies, setclickedReplies] = useState([false, false, false, false, false, false, false, false]);
        const [clickedReply, setclickedReply] = useState(false);

        const [isHovered, setIsHovered] = React.useState(false);

        const buttonStyle = {
            borderColor: '#ffffff',
            color: isHovered ? '#ffffff' : '#6859a0ff',
            background: isHovered ? '#6859a0ff' : '#a3a1be',
            boxShadow: isHovered ? '0 8px 16px rgba(109, 13, 13, 0.2)' : 'none',
            transition: 'box-shadow 0.3s ease',
        };
        function checkState() {
            let copiedShopCart = { ...shopCart };
        }
        function handleShareClick() {
            let copiedShopCart = { ...shopCart };
            copiedShopCart['posts'][btnIdx]['share'] == 0 ? setCntShare(cntShare + 1) : setCntShare(cntShare - 1);
            (buttonShareText === ' Share') ? copiedShopCart['posts'][btnIdx]['share'] = 1 : copiedShopCart['posts'][btnIdx]['share'] = 0;
            (buttonShareText === ' Share') ? setButtonShareText(' Unshare') : setButtonShareText(' Share');
            (iconShareColor === color_1) ? setIconShareColor('#ffffff') : setIconShareColor(color_1);

            setShopCart(shopCart => ({
                ...copiedShopCart
            }));
            console.log(shopCart);
            console.log(btnIdx, uid);
            sendMessage({ 'type': 'share', 'uid': uid, 'ct': ct, 'pid': pid, 'index': btnIdx, data: shopCart });

        }
        function handleLikeClick() {
            let copiedShopCart = { ...shopCart };
            copiedShopCart['posts'][btnIdx]['like'] == 0 ? setCntLike(cntLike + 1) : setCntLike(cntLike - 1);
            (buttonLikeText === ' Like') ? copiedShopCart['posts'][btnIdx]['like'] = 1 : copiedShopCart['posts'][btnIdx]['like'] = 0;
            (buttonLikeText === ' Like') ? setButtonLikeText(' Liked') : setButtonLikeText(' Like');
            (iconLikeColor === color_1) ? setIconLikeColor('#ffffff') : setIconLikeColor(color_1);

            setShopCart(shopCart => ({
                ...copiedShopCart
            }));
            console.log(shopCart);
            console.log(btnIdx, uid);

            sendMessage({ 'type': 'share', 'uid': uid, 'ct': ct, 'pid': pid, 'index': btnIdx, data: shopCart });

        }
        function handleBkmkClick() {
            let copiedShopCart = { ...shopCart };
            (buttonBkmkText === ' Bookmark') ? copiedShopCart['posts'][btnIdx]['bookmark'] = 1 : copiedShopCart['posts'][btnIdx]['bookmark'] = 0;
            (buttonBkmkText === ' Bookmark') ? setButtonBkmkText(' Bookmarked') : setButtonBkmkText(' Bookmark');
            (iconBkmkColor === color_1) ? setIconBkmkColor('#ffffff') : setIconBkmkColor(color_1);

            setShopCart(shopCart => ({
                ...copiedShopCart
            }));
            console.log(shopCart);
            console.log(btnIdx, uid);

            sendMessage({ 'type': 'share', 'uid': uid, 'ct': ct, 'pid': pid, 'index': btnIdx, data: shopCart });

        }
        function handleReplyClick() {
            setclickedReply(clickedReply ? false : true);
            let copiedShopCart = { ...shopCart };
            (buttonReplyText === ' Comment') ? copiedShopCart['posts'][btnIdx]['reply'] = 1 : copiedShopCart['posts'][btnIdx]['reply'] = 0;
            (iconReplyColor === color_1) ? setIconReplyColor('#ffffff') : setIconReplyColor(color_1);

            setShopCart(shopCart => ({
                ...copiedShopCart
            }));
            console.log(shopCart);
            console.log(btnIdx, uid);


            sendMessage({ 'type': 'share', 'uid': uid, 'ct': ct, 'pid': pid, 'index': btnIdx, data: shopCart });

        }
        function handleSendReplyClick() {
            var replyText = document.getElementById('textarea_reply_' + btnIdx);

            var er = replyText.value;
            console.log(er);
            repliesJson['accRespId_' + btnIdx].push(er);
            setrepliesJson(repliesJson);
            isreplied['isrepliedId_' + btnIdx] = true;
            setisreplied(isreplied);
            sendMessage({ 'type': 'share', 'uid': uid, 'ct': ct, 'pid': pid, 'index': btnIdx, data: shopCart });
            handleReplyClick();
            document.getElementById('textarea_reply_' + btnIdx).value = '';

        }

        return (
            <div style={{ display: visibleRT ? 'none' : 'block' }}>
                <div className="eqi-container">
                    <Button
                        disabled={visibleRT}
                        className="btn-style"
                        onClick={handleReplyClick}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                        <p style={{ height: "300", marginBottom: "0" }}>
                            <svg id='rt-icon' style={{ height: "35px", width: "35px", fill: iconReplyColor, stroke: color_1, strokeWidth: "10" }} className='icon-style' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">

                                <path xmlns="http://www.w3.org/2000/svg" d="m 139.97631,148.23641 c -9.65791,0.006 -18.14936,10.69925 -18.17603,21.95972 l -0.40632,169.55175 31.34842,-28.62591 212.1922,0.52527 c 11.29934,0.0253 20.61603,-11.44018 20.6167,-22.24361 l 0.008,-119.04058 c 7e-4,-10.62362 -9.93752,-22.26518 -20.48568,-22.25847 z m 23.72718,226.62525 -49.28559,43.33563 c -13.62585,11.98056 -33.729582,9.84951 -44.902816,-4.76201 -4.678367,-6.11615 -7.234388,-13.78346 -7.234388,-21.69255 V 169.58526 c 0,-47.23789 35.712051,-85.531853 79.765064,-85.531853 h 223.34192 c 44.05294,-2.42e-4 79.7653,38.293693 79.7653,85.531593 v 119.74479 c 0,47.23753 -35.71236,85.53187 -79.76502,85.53187 z" /></svg>
                            {buttonReplyText}
                        </p>
                    </Button>
                    <Button
                        disabled={visibleRT}
                        title="Share"
                        className="btn-style"
                        onClick={handleShareClick}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                        <p style={{ height: "300", marginBottom: "0" }}>
                            <svg id='rt-icon' style={{ height: "35px", width: "40px", fill: iconShareColor, stroke: color_1, strokeWidth: "10" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="m 238.80147,369.86515 c 12.74534,0 23.04242,-11.4297 23.04242,-25.57692 0,-14.14726 -10.29708,-25.57694 -23.04242,-25.57694 h -80.6485 c -12.74535,0 -23.04243,-11.42969 -23.04243,-25.57691 V 190.82671 h 23.04243 c 9.28898,0 17.71387,-6.23438 21.31424,-15.82575 3.60038,-9.59132 1.58417,-20.54145 -4.96852,-27.89481 L 128.41384,95.952302 c -9.00095,-9.990984 -23.61849,-9.990984 -32.619437,0 L 49.709547,147.10615 c -6.624699,7.35336 -8.568903,18.30349 -4.968524,27.89481 3.600379,9.59137 11.953259,15.82575 21.314247,15.82575 h 23.042427 v 102.30767 c 0,42.36178 30.963273,76.73077 69.127283,76.73077 h 80.6485 z m 23.04242,-255.76923 c -12.74533,0 -23.04242,11.4297 -23.04242,25.57693 0,14.14726 10.29709,25.57692 23.04242,25.57692 h 80.6485 c 12.74535,0 23.04245,11.42968 23.04245,25.57694 v 102.30767 h -23.04245 c -9.28898,0 -17.71386,6.23437 -21.31425,15.82571 -3.60037,9.59135 -1.58416,20.54148 4.96853,27.89484 l 46.08487,51.15384 c 9.00094,9.99099 23.61848,9.99099 32.61943,0 l 46.08485,-51.15384 c 6.62471,-7.35336 8.5689,-18.30349 4.96853,-27.89484 -3.60038,-9.59134 -11.95326,-15.82571 -21.31425,-15.82571 H 411.54767 V 190.82671 c 0,-42.36178 -30.96326,-76.73079 -69.12728,-76.73079 z" /></svg>
                            {"   " + cntShare}
                        </p>
                    </Button>

                    <Button
                        disabled={visibleRT}
                        title="Like"
                        className="btn-style"
                        onClick={handleLikeClick}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                        <p style={{ height: "300", marginBottom: "0" }}>
                            <svg id='rt-icon' style={{ height: "32px", width: "32px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path style={{ height: "27px", width: "15px", fill: iconLikeColor, stroke: color_1, strokeWidth: "10" }} d="m 248.47837,109.63639 c 18.06217,-20.323935 38.53036,-33.220522 59.40521,-39.972661 21.95925,-7.089745 44.29127,-7.258556 64.69168,-2.025637 20.50209,5.232903 39.03869,15.935043 53.33931,30.485892 18.90936,19.243596 30.80396,45.104286 30.80396,74.341046 0,46.25216 -22.36592,90.30987 -59.03244,132.91586 -34.36218,39.9389 -81.50002,78.83121 -134.22934,117.25088 -8.74304,6.38077 -20.26487,6.34701 -28.80457,0.74274 v 0.0337 l -0.10174,-0.0675 v 0.0337 l -0.0678,-0.0337 -0.71164,-0.50642 C 218.65709,412.97613 204.11925,402.88168 190.39472,392.65219 176.67018,382.4227 163.25064,371.65304 150.30553,360.37697 82.936689,301.70089 40.305916,237.48804 40.305916,172.43119 c 0,-29.70942 11.657379,-55.50258 30.261751,-74.543606 C 84.969955,83.134153 103.54044,72.533302 124.0764,67.401673 v 0 c 20.29877,-5.064108 42.59689,-4.726502 64.55615,2.32949 21.07818,6.75214 41.74969,19.68248 59.84575,39.905137 z m 74.82413,7.9 c -18.60437,6.00941 -37.27652,20.76282 -52.55989,46.96112 -2.13491,4.01752 -5.42203,7.46112 -9.658,9.89189 -12.06403,6.92093 -27.48295,2.76837 -34.39606,-9.25043 -15.24948,-26.40087 -34.36216,-41.42438 -53.47484,-47.53506 -12.57235,-4.01752 -25.28025,-4.22008 -36.86987,-1.35042 v 0 h -0.0678 c -11.35239,2.80214 -21.58648,8.64273 -29.48233,16.71154 -9.72578,9.95939 -15.825564,23.63248 -15.825564,39.5 0,49.0543 35.887114,100.6744 92.513524,149.99876 11.11519,9.68932 23.55198,19.64873 37.10708,29.74318 8.84469,6.61709 18.12994,13.23419 27.24574,19.37864 44.15572,-32.95044 83.12661,-65.93464 111.49065,-98.91883 29.07568,-33.7607 46.76508,-67.25131 46.76508,-100.20175 0,-15.36112 -6.23534,-28.96667 -16.13057,-39.06112 -8.06527,-8.17008 -18.40103,-14.17949 -29.82121,-17.0829 -11.52182,-2.97095 -24.22972,-2.83591 -36.83596,1.21538 z" /></svg>
                            {"   " + cntLike}
                        </p>
                    </Button>
                    <Button
                        title="Bookmark"
                        disabled={visibleRT}
                        className="btn-style"
                        onClick={handleBkmkClick}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                        <p style={{ height: "300", marginBottom: "0" }}>
                            <svg id='rt-icon' style={{ height: "35px", width: "32px", fill: iconBkmkColor, stroke: color_1, strokeWidth: "10" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="m 143.48635,44.434579 h 209.66547 c 13.34242,0 25.48849,5.349541 34.28692,13.946559 8.82273,8.620763 14.29778,20.496975 14.29778,33.525998 V 445.78114 c 0,3.72599 -3.09473,6.74988 -6.90801,6.74988 -1.67393,0 -3.2172,-0.59041 -4.41754,-1.57178 L 253.46743,349.47434 116.46673,451.07892 c -2.98858,2.28187 -7.32446,1.76327 -9.65163,-1.15689 -0.94446,-1.18281 -1.45617,-2.64067 -1.45346,-4.14089 l -0.0326,-364.062652 c 0,-10.228541 4.28689,-19.547524 11.20306,-26.31336 6.96518,-6.789773 16.49431,-10.970549 26.95431,-10.970549 z M 343.91057,89.828525 161.41056,88.839366 c -2.40555,-0.01304 -5.03666,1.253888 -6.19822,2.588331 -1.31691,1.512905 -1.72439,4.872935 -1.70382,6.960775 l 0.12781,263.996018 93.85281,-70.69215 c 8.57745,-8.90884 14.23664,-0.39031 16.92309,1.6522 l 87.5318,65.64363 0.51241,-259.544754 c -0.0267,-2.789362 -0.38196,-4.897136 -2.16938,-6.85654 -1.73231,-1.898991 -3.38911,-2.742159 -6.37649,-2.758351 z" fill-rule="nonzero" /></svg>
                            { }
                        </p>
                    </Button>
                </div>
                <div style={{ marginTop: "2%", display: clickedReply ? 'block' : 'none' }} >
                    <div className="eqi-container"><p style={{ width: "14%", fontSize: 16 }}>Please enter your comment here:</p>
                        <Form.Control id={'textarea_reply_' + btnIdx} as="textarea" rows={2} style={{ width: "68%" }}>  </Form.Control> <Button disabled={visibleRT} style={{ width: "13%", backgroundColor: color_1 }} onClick={handleSendReplyClick}>Send</Button>
                    </div>

                </div>



            </div>
        );
    }

    function shop1(value, btnIdx) {
        let copiedShopCart = { ...shopCart };
        copiedShopCart['posts'][btnIdx]['trustRank'] = value;
        setShopCart(shopCart => ({
            ...copiedShopCart
        }));
        console.log(shopCart);
    }

    function setOpnMatch(value, btnIdx) {
        let copiedShopCart = { ...shopCart };
        copiedShopCart['posts'][btnIdx]['opnMatch'] = value;
        setShopCart(shopCart => ({
            ...copiedShopCart
        }));
        console.log(shopCart);
    }

    function RatingTrust(btnIdx, type) {

        const [rateValue, setRateValue] = useState(0);
        const setRV1 = () => {
            setRateValue(1);
            shop1(1, btnIdx);
        };
        const setRV2 = () => {
            setRateValue(2);
            shop1(2, btnIdx);
        };
        const setRV3 = () => {
            setRateValue(3);
            shop1(3, btnIdx);
        };
        const setRV4 = () => {
            setRateValue(4);
            shop1(4, btnIdx);
        };
        const setRV5 = () => {
            setRateValue(5);
            shop1(5, btnIdx);
        };
        const [oMatchValue, setOMatchValue] = useState(0);
        const setOMV1 = () => {
            setOMatchValue(1);
            setOpnMatch(1, btnIdx);
        };
        const setOMV2 = () => {
            setOMatchValue(2);
            setOpnMatch(2, btnIdx);
        };
        const setOMV3 = () => {
            setOMatchValue(3);
            setOpnMatch(3, btnIdx);
        };
        const setOMV4 = () => {
            setOMatchValue(4);
            setOpnMatch(4, btnIdx);
        };
        const setOMV5 = () => {
            setOMatchValue(5);
            setOpnMatch(5, btnIdx);
        };
        const setOMV6 = () => {
            setOMatchValue(6);
            setOpnMatch(6, btnIdx);
        };

        const formCheckLabel = "Not at all   ";

        var int_text = type === 'comment' ? 'The statement of the {type} by <b>{names[lReplyIdx[btnIdx][1]]}</b> matches my opinion.' : 'The statement of the {type} by <b>{names[lReplyIdx[btnIdx][1]]}</b> matches my opinion.';
        if (visibleRT) {

            return (<div className="d-flex align-items-start flex-column" style={{ width: "100%", marginLeft: "5%", marginTop: "5%", fontSize: "18px" }}>
                <div style={{ width: "100%" }}>
                    <p>How trustworthy do you find this {type}?</p>
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Label>{formCheckLabel}</Form.Label>
                                <Form.Text>     </Form.Text>
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setRV1}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setRV2}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setRV3}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setRV4}
                                    id={`inline-${type}-4`}
                                />
                                <Form.Check
                                    inline
                                    label="Totally"
                                    name="group1"
                                    type={type}
                                    onChange={setRV5}
                                    id={`inline-${type}-5`}
                                />
                            </div>
                        ))}
                    </Form>

                </div>
                <div style={{ width: "100%" }}>
                    <p>The statement of the {type} matches your opinion.</p>
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Label>{formCheckLabel}</Form.Label>
                                <Form.Text>     </Form.Text>
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setOMV1}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setOMV2}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setOMV3}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setOMV4}
                                    id={`inline-${type}-4`}
                                />
                                <Form.Check
                                    inline
                                    label="Totally"
                                    name="group1"
                                    type={type}
                                    onChange={setOMV5}
                                    id={`inline-${type}-5`}
                                /><Form.Check
                                    inline
                                    label="I don't know"
                                    name="group1"
                                    type={type}
                                    onChange={setOMV6}
                                    id={`inline-${type}-5`}
                                />
                            </div>
                        ))}
                    </Form>

                </div>
            </div>
            );
        }
        else {
            return (
                <div>

                </div>
            );
        }
    }

    function AccordionResp(responses, data, postIdx, ifH, ifAI, cond) {

        //var _responses = responses.concat(repliesJson['accRespId_1']);
        var lnewreplies = lSupReplies;
        var response = "";
        if (cond == 5) {
            ifH = false;
            ifAI = false;
        }
        else if (cond == 1) {
            ifH = true;
            ifAI = false;
            response = lSupReplies[lMainOrd[postIdx]];
        }
        else if (cond == 2) {
            ifH = true;
            ifAI = false;
            response = lConReplies[lMainOrd[postIdx]];
        }
        else if (cond == 3) {
            ifH = false;
            ifAI = true;
            response = lSupReplies[lMainOrd[postIdx]];
        }
        else if (cond == 4) {
            ifH = false;
            ifAI = true;
            response = lConReplies[lMainOrd[postIdx]];
        }

        var _responses = repliesJson['accRespId_' + postIdx];
        const accRespId = 'accRespId_' + postIdx;

        const [active, setActive] = useState(false);

        function handleClick(ekey) {
            console.log(postIdx, 'response', ekey, uid);
            sendMessage({ 'type': 'accordion', 'uid': uid, 'ct': ct, 'pid': pid, 'index': postIdx, 'sub_type': 'response', 'state': ekey, 'post_id': mdata.posts[lMainOrd[postIdx]].title });
            active ? setActive(false) : setActive(true);
        };

        function hcLink(post_id) {
            sendMessage({ 'type': 'post', 'uid': uid, 'ct': ct, 'pid': pid, 'index': postIdx, 'sub_type': 'link_click', 'post_id': post_id });
        };

        if (false && visibleRT) {
            return (<Accordion id={'accr' + postIdx} alwaysOpen >
                <Accordion.Item id={'accri' + postIdx} eventKey="0" onClick={(e) => handleClick(active)}>
                    <Accordion.Header>Show Responses</Accordion.Header>
                    <Accordion.Body>
                        <ul className="d-grid gap-3 list-unstyled">
                            {responses.map((item, index) => (
                                <li key={item}><div className="d-flex justify-content-left ">
                                    <div style={{ marginLeft: "1%" }}>
                                        <p><img className="circular-image" src={lReplyPIdx[postIdx][index]} alt="Logo" style={{ height: "60px", width: "60px", borderRadius: "50%", overflow: "hidden", fontSize: 50 }} /> </p>

                                    </div>
                                    <div style={{ paddingLeft: "1%", paddingRight: "1%" }}>
                                        <p> <b>{names[lReplyIdx[postIdx][index]]} @{names[lReplyIdx[postIdx][index]]}</b></p>
                                        <p>  {item}</p>

                                    </div>
                                </div>
                                </li>
                            ))}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>);
        }
        else {
            return (
                <div>
                    <div style={{}}>
                        <ul className="d-grid gap-3 list-unstyled" id={accRespId}>
                            <li key={data.supportiveHComment} style={{ display: ifH ? 'block' : 'none' }}><div className="d-flex justify-content-left ">
                                <div>
                                    <svg id='rt-icon' style={{ height: "40px", width: "30px", fill: color_1 }} xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" ><path xmlns="http://www.w3.org/2000/svg" d="M1.307,5.988 L6.616,1.343 C7.027,0.933 7.507,0.864 7.918,1.275 L7.918,4.407 C8.014,4.406 8.098,4.406 8.147,4.406 C13.163,4.406 16.885,7.969 16.885,12.816 C16.885,14.504 16.111,13.889 15.788,13.3 C14.266,10.52 11.591,8.623 8.107,8.623 C8.066,8.623 7.996,8.624 7.917,8.624 L7.917,11.689 C7.506,12.099 6.976,12.05 6.615,11.757 L1.306,7.474 C0.897,7.064 0.897,6.399 1.307,5.988 L1.307,5.988 Z" fill="#434343" class="si-glyph-fill"> </path></svg>
                                </div>
                                <div style={{ marginLeft: "1%" }}>
                                    <p><img className="circular-image" src={lReplyPIdx[postIdx][0]} alt="Logo" style={{ height: "60px", width: "60px", borderRadius: "50%", overflow: "hidden", fontSize: 50 }} /> </p>

                                </div>
                                <div style={{ paddingLeft: "1%" }}>
                                    <p> <b>{names[lReplyIdx[postIdx][0]]} @{names[lReplyIdx[postIdx][0]]}</b></p>
                                    <p>  {response}  <a href={data.mainURL} onClick={(e) => hcLink(data.title)} target="_blank">{data.supportiveURL}</a> </p>

                                </div>
                            </div>
                            </li>
                            <li key={data.supportiveAIComment} style={{ display: ifAI ? 'block' : 'none' }}><div className="d-flex justify-content-left ">
                                <div >
                                    <svg id='rt-icon' style={{ height: "40px", width: "30px", fill: color_1 }} xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" ><path xmlns="http://www.w3.org/2000/svg" d="M1.307,5.988 L6.616,1.343 C7.027,0.933 7.507,0.864 7.918,1.275 L7.918,4.407 C8.014,4.406 8.098,4.406 8.147,4.406 C13.163,4.406 16.885,7.969 16.885,12.816 C16.885,14.504 16.111,13.889 15.788,13.3 C14.266,10.52 11.591,8.623 8.107,8.623 C8.066,8.623 7.996,8.624 7.917,8.624 L7.917,11.689 C7.506,12.099 6.976,12.05 6.615,11.757 L1.306,7.474 C0.897,7.064 0.897,6.399 1.307,5.988 L1.307,5.988 Z" fill="#434343" class="si-glyph-fill"> </path></svg>
                                </div>
                                <div style={{ marginLeft: "1%" }}>
                                    <p><img className="border circular-image" src={lReplyPIdx[postIdx][1]} alt="Logo" style={{ height: "60px", width: "60px", borderRadius: "50%", overflow: "hidden", fontSize: 50 }} /> </p>

                                </div>
                                <div style={{ paddingLeft: "1%" }}>
                                    <p> <b>{names[lReplyIdx[postIdx][1]]} @{names[lReplyIdx[postIdx][1]]}</b></p>
                                    <p>  {response} <a href={data.supportiveURL} onClick={(e) => hcLink(data.title)} target="_blank">{data.supportiveURL}</a> </p>

                                </div>

                            </div>


                            </li>
                        </ul>
                        <ul  className={ visibleRT ? '' : "d-grid gap-3 list-unstyled"} style={{ display: visibleRT ? 'none' : 'block' }}>
                            {_responses.map((item, index) => (
                                <li key={item + index}><div className="d-flex justify-content-left ">
                                    <div>
                                        <svg id='rt-icon' style={{ height: "40px", width: "30px", fill: color_1 }} xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" ><path xmlns="http://www.w3.org/2000/svg" d="M1.307,5.988 L6.616,1.343 C7.027,0.933 7.507,0.864 7.918,1.275 L7.918,4.407 C8.014,4.406 8.098,4.406 8.147,4.406 C13.163,4.406 16.885,7.969 16.885,12.816 C16.885,14.504 16.111,13.889 15.788,13.3 C14.266,10.52 11.591,8.623 8.107,8.623 C8.066,8.623 7.996,8.624 7.917,8.624 L7.917,11.689 C7.506,12.099 6.976,12.05 6.615,11.757 L1.306,7.474 C0.897,7.064 0.897,6.399 1.307,5.988 L1.307,5.988 Z" fill="#434343" class="si-glyph-fill"> </path></svg>
                                    </div>
                                    <div style={{ marginLeft: "1%" }}>
                                        <p><img className="border circular-image" src={defaultPp} alt="Logo" style={{ height: "60px", width: "60px", borderRadius: "50%", overflow: "hidden", fontSize: 50 }} /> </p>

                                    </div>
                                    <div style={{ paddingLeft: "1%", width: "500px" }}>
                                        <p> <b>{defaultUname} @{defaultUname}</b></p>
                                        <div> <p style={{ height: 'auto', wordWrap: 'break-word' }}>{item}</p> </div>

                                    </div>
                                </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            )
        };
    }


    function SetCondition(cond, data, idx) {
        switch (cond) {

            default:
                return (<div></div>);
        }
    }

    function SetPost(data, cond, btnIdx) {

        function hcLink(post_id) {
            sendMessage({ 'type': 'post', 'uid': uid, 'ct': ct, 'pid': pid, 'index': btnIdx, 'sub_type': 'link_click', 'post_id': post_id });
        };

        var _responses = repliesJson['accRespId_' + btnIdx];

        if (cond == 6) {
            return (<div key={btnIdx} className=" border border d-grid gap-3" style={{ alignItems: 'flex-start', paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%", paddingRight: "2%" }}>
                <div className="d-flex justify-content-center" >
                    <div style={{ marginLeft: "1%" }}>

                        <p><img className="circular-image" src={lImages[btnIdx]} alt="Logo" style={{ height: "60px", width: "60px", borderRadius: "50%", overflow: "hidden", fontSize: 50 }} /> </p>
                    </div>
                    <div className="rounded-3 d-grid gap-3" style={{ paddingLeft: "1%", width: "150%", fontSize: "18px" }}>
                        <p> <b>{lUser[btnIdx]} @{lUser[btnIdx]}</b></p>
                        <p>  {data.mainPost} <a href={data.mainURL} onClick={(e) => hcLink(data.title)} target="_blank">{data.mainRURL}</a></p>

                        <div>
                            {SetCondition(cond, data, btnIdx)}
                        </div>
                        <div>
                            {ButtonsAll(btnIdx)}
                        </div>

                    </div>

                    {RatingTrust(btnIdx)}

                </div>
            </div>);
        }
        else {
            return (
                <div key={btnIdx} className=" border-top border-bottom d-grid gap-3" style={{ alignItems: 'flex-start', paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%", paddingRight: "2%", marginBottom: "2%" }}>
                    <div className="d-flex justify-content-center" style={{ marginTop: '1%', width: "100%" }}>

                        <div className="rounded-3 d-grid gap-3" style={{ paddingLeft: "1%", width: "100%", fontSize: "18px" }}>
                            <Container style={{ height: "100%", width: "100%" }}>
                                <Row >
                                    
                                    <Col  md={visibleRT ? 7 : 12} style={{ height: "70%" }}>
                                        
                                        <div className="d-flex justify-content-left ">
                                            <div style={{ marginLeft: "%" }}>
                                                <p><img className="circular-image" src={lImages[btnIdx]} alt="Logo" style={{ height: "60px", width: "60px", borderRadius: "50%", overflow: "hidden", fontSize: 50 }} /> </p>
                                            </div>
                                            <div style={{ paddingLeft: "1%" }}>
                                                <p> <b>{lUser[btnIdx]} @{lUser[btnIdx]}</b></p>
                                                <p>  {data.mainPost} </p>
                                            </div>
                                        </div>


                                    </Col>
                                    <Col  md={5} style={{ display: visibleRT ? 'block' : 'none' }}>
                                        {RatingTrust(btnIdx, 'post')}
                                    </Col>
                                </Row>

                            </Container>

                            <Container style={{ height: "100%" }}>
                                <Row className='border-bottom border-top' style={{ display: [0, 1, 2, 3, 4].includes(cond) | (_responses.length != 0 & !visibleRT) ? 'block' : 'none' }}><h4>Comments</h4></Row>
                                <Row style={{ marginTop: '1%', width: "100%" }}>
                                    <Col xs={12} md={visibleRT ? 7 : 12} style={{ }}>
                                        <div>
                                            {AccordionResp(data.replies, data, btnIdx, false, true, cond)}
                                        </div>
                                    </Col>
                                    <Col xs={6} md={5} style={{  display: visibleRT ? 'block' : 'none' }}>
                                        <div style={{ display: [0, 1, 2, 3, 4].includes(cond) ? 'block' : 'none' }}>
                                            {RatingTrust(btnIdx, 'comment')}
                                        </div>
                                    </Col>
                                </Row>
                                <Row><div>
                                    {ButtonsAll(btnIdx)}
                                </div></Row>

                            </Container>




                        </div>


                    </div>
                </div>);
        }

    }

    var lMainOrd;
    function setOrder(ord, idx) {
        switch (ord) {
            case 1:
                lMainOrd = lPostOrder_1;
                return SetPost(mdata.posts[lPostOrder_1[idx]], lPostTzpes_1[idx], idx);
            case 2:
                lMainOrd = lPostOrder_2;
                return SetPost(mdata.posts[lPostOrder_2[idx]], lPostTzpes_2[idx], idx);
            case 3:
                lMainOrd = lPostOrder_3;
                return SetPost(mdata.posts[lPostOrder_3[idx]], lPostTzpes_3[idx], idx);
            case 4:
                lMainOrd = lPostOrder_4;
                return SetPost(mdata.posts[lPostOrder_4[idx]], lPostTzpes_4[lPostOrder_4[idx]], idx);
            default:
                lMainOrd = lPostOrder_1;
                return SetPost(mdata.posts[lPostOrder_1[idx]], lPostTzpes_1[idx], idx);
        }
    }


    return (<div className='ml-1' style={{ marginLeft: "17%", marginRight: "17%", width: "66%", marginTop: "3%", fontSize: 20 }}>
        <div style={{ padding: "2%", borderStyle: "solid", borderRadius: 10, borderColor: "red", borderWidth: "medium" }}>

            <p  ><b>Please read the following instruction carefully!</b></p>
            <p>{visibleRT ? instr_2 : instr_1}</p>
            <p><b>{visibleRT ? '' : 'For each post, please decide whether or not you would like interact with any type of actions: Comment, Share, Like, and Bookmark.'}</b></p>
        </div>
        <hr className="hr" />

        <h1>Timeline</h1>
        <div className="border border-right rounded-3 " style={{ marginTop: "2%", marginBottom: "2%" }}>
            <div>
                {mdata.posts.map((item, index) => (
                    setOrder(mainOrd, index)
                ))}
            </div>

        </div>
        <div style={{ marginBottom: "3%" }}>
            <button id='next' type="button" disabled={activeNext} className="btn btn-outline-danger  btn-lg d-flex justify-content-center position-relative end-0" style={{ width: "100%" }} onClick={onClickHandler}>
                <p style={{ height: "300", marginBottom: "0", fontSize: "25px" }}>
                Next Page >
                </p>
            </button>
        </div>

    </div>)

}

export default ContentView;