html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block
}

body {
    line-height: 1
}

ol,
ul {
    list-style: none
}

blockquote,
q {
    quotes: none
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

.f {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

.f--center-center {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.f--left-center {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.hidden {
    display: none
}

.arrow-down-dims {
    width: 17px;
    height: 21px
}

.arrow-next-dims {
    width: 20px;
    height: 16px
}

.arrow-prev-dims {
    width: 20px;
    height: 16px
}

.burger-dims {
    width: 43px;
    height: 38px
}

.close-dims {
    width: 43px;
    height: 43px
}

.logo-large-dims {
    width: 253px;
    height: 67px
}

.logo-small-dims {
    width: 86px;
    height: 23px
}

@font-face {
    font-family: 'antoni-web';
    src: url("../fonts/antoni-roman-web.woff2") format("woff2"), url("../fonts/antoni-roman-web.woff") format("woff");
    font-weight: normal;
    font-style: normal
}

@font-face {
    font-family: 'antoni-web';
    src: url("../fonts/antoni-bold-web.woff2") format("woff2"), url("../fonts/antoni-bold-web.woff") format("woff");
    font-weight: bold;
    font-style: normal
}

.smoothing {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    font-smoothing: antialiased
}

.container,
.case .section--video .content-wrapper,
.case .section--slideshow-videos .content-wrapper,
.case .section--slideshow-photos .content-wrapper {
    width: calc(100% - 88px);
    margin-left: 44px
}

.r {
    position: relative;
    display: block
}

.r::after {
    content: "";
    display: block
}

.r--16-9::after {
    padding-bottom: 56.25%
}

.r--1-1::after {
    padding-bottom: 100%
}

.r__content {
    position: absolute;
    top: 0;
    left: 0
}

.r__content--width {
    width: 100%
}

.r__content--height {
    height: 100%
}

@media screen and (max-width: 740px) {
    .container,
    .case .section--video .content-wrapper,
    .case .section--slideshow-videos .content-wrapper,
    .case .section--slideshow-photos .content-wrapper {
        width: calc(100% - 44px);
        margin-left: 22px
    }
}

html {
    font-size: 62.5%
}

body {
    font-family: "antoni-web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #000;
    font-size: 1.4rem;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    font-smoothing: antialiased;
    background: #000;
    height: 100vh;
    width: 100%;
    overflow: hidden
}

.loading * {
    cursor: progress !important
}

::-moz-selection {
    background: #222;
    color: #fff
}

::selection {
    background: #222;
    color: #fff
}

::-moz-selection {
    background: #222;
    color: #fff
}

a,
a:visited,
.a {
    color: #999;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -webkit-transition: color 2s cubic-bezier(0.26, 1.04, 0.54, 1);
    -o-transition: color 2s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: color 2s cubic-bezier(0.26, 1.04, 0.54, 1)
}

a:hover,
a:visited:hover,
.a:hover {
    -webkit-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    transition-duration: 0.4s;
    color: #f8f9fa
}

a:active,
a:visited:active,
.a:active {
    color: #f8f9fa
}

.p {
    font-size: 15px;
    line-height: 1.1;
    -webkit-text-stroke: 0.15px
}

.p a {
    display: inline-block;
    position: relative
}

.p a::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -3px;
    width: 100%;
    height: 1px;
    background: #a4a4a4;
    -webkit-transition: background 2s cubic-bezier(0.26, 1.04, 0.54, 1);
    -o-transition: background 2s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: background 2s cubic-bezier(0.26, 1.04, 0.54, 1)
}

.p a:hover::after {
    -webkit-transition-duration: 0.4s;
    -o-transition-duration: 0.4s;
    transition-duration: 0.4s;
    background: #f8f9fa
}

.h1,
.h2,
.h3,
.h4 {
    text-rendering: optimizelegibility
}

.h1 {
    font-size: 13vw;
    margin-left: -0.4vw;
    font-weight: bold;
    line-height: 0
}

.h1 .word {
    display: inline-block;
    overflow: hidden;
    padding-right: 0.05em;
    line-height: 1.08;
    margin-top: -1.5625vw
}

.h1 .word:after {
    content: "";
    display: block
}

.h1 .tx {
    display: block
}

.scrollable {
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    overflow: hidden
}

.container,
.case .section--video .content-wrapper,
.case .section--slideshow-videos .content-wrapper,
.case .section--slideshow-photos .content-wrapper {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.main-overlay {
    position: fixed;
    z-index: 50;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #000
}

.head {
    overflow: hidden;
    position: relative;
    display: table;
    width: 100%;
    height: 100vh
}

.head .background {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block
}

.head .background video {
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.head .background video::-webkit-media-controls-panel,
.head .background video::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none
}

.head h1 {
    z-index: 10;
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-family: "antoni-web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 180px;
    font-size: 14.0625vw;
    letter-spacing: -0.02em;
    position: relative;
    display: table-cell;
    vertical-align: middle
}

@media screen and (max-width: 740px) {
    .head h1 {
        font-size: 110px;
        font-size: 14.86486vw
    }
}

.head .arrow-down {
    cursor: pointer;
    position: absolute;
    z-index: 10;
    bottom: 44px;
    right: 44px
}

@media screen and (max-width: 740px) {
    .head .arrow-down {
        bottom: 132px;
        bottom: 17.83784vw;
        right: 44px;
        right: 5.94595vw;
        width: 17px;
        width: 2.2973vw;
        height: 21px;
        height: 2.83784vw
    }
}

#container>div {
    visibility: hidden
}

#container>div.shown {
    z-index: 2;
    visibility: inherit
}

@media screen and (max-width: 740px) {
    .no-mobile {
        display: none
    }
}

@media screen and (min-width: 741px) {
    .mobile {
        display: none
    }
}

@media screen and (min-width: 1025px) {
    .tablet {
        display: none
    }
}

@media screen and (max-width: 1024px) {
    .desktop {
        display: none !important
    }
    .p {
        font-size: 13px
    }
}

.link {
    -webkit-tap-highlight-color: transparent;
    font-size: 15px;
    letter-spacing: 0.025em;
    position: relative;
    overflow: hidden;
    -webkit-text-stroke: 0.20px;
    z-index: 1;
    line-height: 1.8;
    display: block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer
}

.link::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    z-index: 0;
    bottom: 0;
    background: #fff;
    -webkit-transform: translate3d(-102%, 0, 0);
    transform: translate3d(-102%, 0, 0);
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    transition: -webkit-transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)
}

.link:hover::after,
.link.active::after {
    -webkit-transition: background 0.3s cubic-bezier(0.26, 1.04, 0.54, 1), -webkit-transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: background 0.3s cubic-bezier(0.26, 1.04, 0.54, 1), -webkit-transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition: transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98), background 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98), background 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98), background 0.3s cubic-bezier(0.26, 1.04, 0.54, 1), -webkit-transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.btn {
    -webkit-tap-highlight-color: transparent
}

.videoplayer-overlay {
    position: absolute;
    background: #000;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: opacity 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition: opacity 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: opacity 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.videoplayer .overlay__toggle-play {
    width: 25%;
    height: 25%;
    max-height: 100px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: transparent;
    border: 0;
    outline: 0;
    -webkit-transition: opacity 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition: opacity 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: opacity 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98)
}

.videoplayer .overlay__toggle-play svg {
    max-width: 100%;
    max-height: 100%
}

.videoplayer .overlay__toggle-play--small {
    opacity: 0
}

.videoplayer-overlay .overlay__toggle-play {
    pointer-events: none
}

.videoplayer.has-overlay .videoplayer-overlay .overlay__toggle-play {
    pointer-events: auto
}

@media screen and (max-width: 1024px) {
    .btn-play,
    .btn-more {
        margin-top: 4.05405vw;
        margin-left: 12.69031%;
        width: 50px;
        bottom: 0
    }
    .btn-play {
        left: 0
    }
    .btn-more {
        position: absolute;
        left: 50px;
        margin-left: 12.69031%
    }
}

@media screen and (max-width: 740px) {
    .videoplayer-overlay {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start
    }
    .content-wrapper {
        height: calc(100% - 44px);
        top: 22px
    }
    .btn-play,
    .btn-more {
        position: absolute
    }
    .btn-play {
        margin: 0
    }
    .btn-more {
        margin-left: 22px
    }
}

.videoplayer-controls {
    visibility: visible;
    opacity: 0;
    position: absolute;
    z-index: 2147483646;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 45px;
    white-space: nowrap;
    -webkit-transition: opacity ease .25s;
    -o-transition: opacity ease .25s;
    transition: opacity ease .25s;
    cursor: auto
}

.videoplayer-controls .container,
.videoplayer-controls .case .section--video .content-wrapper,
.case .section--video .videoplayer-controls .content-wrapper,
.videoplayer-controls .case .section--slideshow-videos .content-wrapper,
.case .section--slideshow-videos .videoplayer-controls .content-wrapper,
.videoplayer-controls .case .section--slideshow-photos .content-wrapper,
.case .section--slideshow-photos .videoplayer-controls .content-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.videoplayer-controls.touch-device .controls__toggle-fullscreen {
    margin-left: 20px
}

.videoplayer-controls div[class^="controls__"] {
    cursor: pointer
}

.videoplayer-controls div[class^="controls__"].grabbing {
    cursor: -webkit-grabbing;
    cursor: grabbing
}

.videoplayer-controls button {
    position: relative;
    display: block;
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    width: 25px;
    height: 25px;
    outline: 0;
    cursor: pointer
}

.videoplayer-controls .controls-icon {
    max-width: 100%;
    max-height: 100%;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}

.videoplayer-controls .icon-play {
    width: 7px;
    margin: 0 1px
}

.videoplayer-controls .icon-pause {
    width: 9px
}

.videoplayer-controls .icon-prev,
.videoplayer-controls .icon-next {
    width: 14px
}

.videoplayer-controls .controls__progress-bar {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 12px 0;
    height: 1px
}

.videoplayer-controls .controls__progress-bar .progress-bar,
.videoplayer-controls .controls__progress-bar .buffer-bar,
.videoplayer-controls .controls__progress-bar .background {
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 3px;
    -webkit-transform-origin: left;
    -ms-transform-origin: left;
    transform-origin: left
}

.videoplayer-controls .controls__progress-bar .progress-bar {
    z-index: 3;
    background: #fff
}

.videoplayer-controls .controls__progress-bar .buffer-bar {
    z-index: 2;
    background: rgba(255, 255, 255, 0.5);
    -webkit-transform: scaleX(0.0001);
    -ms-transform: scaleX(0.0001);
    transform: scaleX(0.0001);
    -webkit-transition: -webkit-transform ease-in-out .15s;
    transition: -webkit-transform ease-in-out .15s;
    -o-transition: transform ease-in-out .15s;
    transition: transform ease-in-out .15s;
    transition: transform ease-in-out .15s, -webkit-transform ease-in-out .15s
}

.videoplayer-controls .controls__progress-bar .background {
    background: rgba(255, 255, 255, 0.2)
}

.videoplayer-controls .controls__mute {
    margin-right: 10px
}

.videoplayer-controls .controls__mute button {
    padding: 2px
}

.videoplayer-controls .controls__toggle-fullscreen,
.videoplayer-controls .controls__mute {
    height: 25px;
    display: inline-block
}

video::-webkit-media-controls-enclosure {
    display: none !important
}

@media screen and (max-width: 740px) {
    .videoplayer-controls .controls__mute {
        display: none
    }
}

.videoplayer {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    cursor: url(../img/cursor-play.cur), pointer;
    cursor: url(../img/cursor-play.svg) 27 27, pointer
}

.videoplayer.playing {
    cursor: url(../img/cursor-pause.cur), pointer;
    cursor: url(../img/cursor-pause.svg) 27 27, pointer
}

.videoplayer.has-overlay .videoplayer-controls {
    visibility: hidden;
    pointer-events: none
}

.videoplayer.native-videoplayer .native-videoplayer__video {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}

.videoplayer.native-videoplayer .native-videoplayer__video::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
    background-color: lime
}

.videoplayer--solo .controls__prev,
.videoplayer--solo .controls__next,
.videoplayer--solo .btn-more {
    display: none
}

.videoplayer--solo .videoplayer-controls.native-videoplayer__controls .controls__toggle-play {
    margin: 0
}

.videoplayer-controls.native-videoplayer__controls.touch-device .controls__progress-bar {
    -webkit-tap-highlight-color: transparent
}

.videoplayer-controls.native-videoplayer__controls .controls__progress-bar {
    width: 74.61937%;
    margin: 0 1.52251%
}

.videoplayer-controls.native-videoplayer__controls .controls__toggle-play {
    margin: 0 5px;
    padding: 0 10px
}

.videoplayer-controls.native-videoplayer__controls .btns {
    width: 11.1678%;
    font-size: 0
}

.videoplayer-controls.native-videoplayer__controls .btns:first-child {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.videoplayer-controls.native-videoplayer__controls .btns:last-child {
    text-align: right
}

@media screen and (max-width: 740px) {
    .videoplayer.native-videoplayer .native-videoplayer__video {
        height: 100%
    }
    .videoplayer-controls.native-videoplayer__controls .btns:first-child {
        width: 17.51296%
    }
    .videoplayer-controls.native-videoplayer__controls .controls__progress-bar {
        width: 68.27422%
    }
}

@media screen and (max-width: 415px) {
    .videoplayer-controls.native-videoplayer__controls .btns:first-child {
        width: 23.85812%
    }
    .videoplayer-controls.native-videoplayer__controls .controls__progress-bar {
        width: 61.92906%
    }
}

:-webkit-full-screen-ancestor body,
:-webkit-full-screen body {
    padding: 0 !important;
    margin: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    max-width: 100% !important
}

:-moz-full-screen-ancestor body,
:-moz-full-screen body {
    padding: 0 !important;
    margin: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    max-width: 100% !important
}

:-ms-fullscreen-ancestor body,
:-ms-fullscreen body {
    padding: 0 !important;
    margin: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    max-width: 100% !important
}

:fullscreen-ancestor body,
:fullscreen body {
    padding: 0 !important;
    margin: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    max-width: 100% !important
}

:-webkit-full-screen-ancestor .videoplayer,
:-webkit-full-screen .videoplayer {
    position: relative !important;
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
    z-index: 0
}

:-moz-full-screen-ancestor .videoplayer,
:-moz-full-screen .videoplayer {
    position: relative !important;
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
    z-index: 0
}

:-ms-fullscreen-ancestor .videoplayer,
:-ms-fullscreen .videoplayer {
    position: relative !important;
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
    z-index: 0
}

:fullscreen-ancestor .videoplayer,
:fullscreen .videoplayer {
    position: relative !important;
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
    z-index: 0
}

:-webkit-full-screen-ancestor .video-wrapper,
:-webkit-full-screen .video-wrapper {
    position: inherit;
    background: black
}

:-moz-full-screen-ancestor .video-wrapper,
:-moz-full-screen .video-wrapper {
    position: inherit;
    background: black
}

:-ms-fullscreen-ancestor .video-wrapper,
:-ms-fullscreen .video-wrapper {
    position: inherit;
    background: black
}

:fullscreen-ancestor .video-wrapper,
:fullscreen .video-wrapper {
    position: inherit;
    background: black
}

:-webkit-full-screen-ancestor .videoplayer-overlay,
:-webkit-full-screen .videoplayer-overlay {
    background: red;
    display: block;
    opacity: 0 !important;
    position: fixed !important
}

:-moz-full-screen-ancestor .videoplayer-overlay,
:-moz-full-screen .videoplayer-overlay {
    background: red;
    display: block;
    opacity: 0 !important;
    position: fixed !important
}

:-ms-fullscreen-ancestor .videoplayer-overlay,
:-ms-fullscreen .videoplayer-overlay {
    background: red;
    display: block;
    opacity: 0 !important;
    position: fixed !important
}

:fullscreen-ancestor .videoplayer-overlay,
:fullscreen .videoplayer-overlay {
    background: red;
    display: block;
    opacity: 0 !important;
    position: fixed !important
}

:-webkit-full-screen-ancestor .videoplayer-controls,
:-webkit-full-screen .videoplayer-controls {
    position: fixed !important;
    bottom: 5% !important
}

:-moz-full-screen-ancestor .videoplayer-controls,
:-moz-full-screen .videoplayer-controls {
    position: fixed !important;
    bottom: 5% !important
}

:-ms-fullscreen-ancestor .videoplayer-controls,
:-ms-fullscreen .videoplayer-controls {
    position: fixed !important;
    bottom: 5% !important
}

:fullscreen-ancestor .videoplayer-controls,
:fullscreen .videoplayer-controls {
    position: fixed !important;
    bottom: 5% !important
}

.slideshow {
    top: 0;
    left: 0;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent
}

.slideshow .btn--prev,
.slideshow .btn--next {
    position: absolute;
    z-index: 2;
    top: 0;
    height: 100%;
    width: calc(50% + 44px)
}

.slideshow .btn--prev {
    left: -44px;
    cursor: url(../img/cursor-prev.cur), pointer;
    cursor: url(../img/cursor-prev.svg) 27 27, pointer
}

.slideshow .btn--next {
    right: -44px;
    cursor: url(../img/cursor-next.cur), pointer;
    cursor: url(../img/cursor-next.svg) 27 27, pointer
}

.slideshow__list {
    z-index: 1;
    height: 100%;
    white-space: nowrap;
    font-size: 0;
    -ms-touch-action: pan-y;
    touch-action: pan-y
}

.slideshow__item {
    position: relative;
    z-index: 1;
    display: inline-block;
    vertical-align: top;
    color: #fff;
    white-space: normal
}

.slideshow__item .media {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0
}

.slideshow__item.current {
    z-index: 0
}

.slideshow--fullwidth .slideshow__list {
    position: absolute;
    top: 0;
    left: -44px
}

.slideshow--fullwidth .slideshow__item {
    position: relative;
    width: calc(100vw - 88px);
    height: 100%;
    overflow: hidden
}

.slideshow--fullwidth .slideshow__item img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%
}

.slideshow--fullwidth .slideshow__item:last-child {
    width: 100vw
}

.slideshow--fullwidth .slideshow__item:last-child img {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.slideshow--fullscreen {
    position: absolute;
    height: 100%
}

.slideshow--fullscreen .slideshow__list {
    position: absolute
}

.slideshow--fullscreen .slideshow__item {
    width: 100vw;
    height: 100%
}

.slideshow--fullscreen .slideshow__item .container,
.slideshow--fullscreen .slideshow__item .case .section--video .content-wrapper,
.case .section--video .slideshow--fullscreen .slideshow__item .content-wrapper,
.slideshow--fullscreen .slideshow__item .case .section--slideshow-videos .content-wrapper,
.case .section--slideshow-videos .slideshow--fullscreen .slideshow__item .content-wrapper,
.slideshow--fullscreen .slideshow__item .case .section--slideshow-photos .content-wrapper,
.case .section--slideshow-photos .slideshow--fullscreen .slideshow__item .content-wrapper {
    position: relative;
    height: 100%
}

.slideshow--video-fullscreen {
    width: 100%
}

.slideshow--video-fullscreen .slideshow__list {
    position: absolute;
    top: 0;
    left: 0
}

.slideshow--video-fullscreen .slideshow__item {
    position: relative;
    width: 100vw;
    height: 100%
}

@media screen and (max-width: 740px) {
    .slideshow__item .container,
    .slideshow__item .case .section--video .content-wrapper,
    .case .section--video .slideshow__item .content-wrapper,
    .slideshow__item .case .section--slideshow-videos .content-wrapper,
    .case .section--slideshow-videos .slideshow__item .content-wrapper,
    .slideshow__item .case .section--slideshow-photos .content-wrapper,
    .case .section--slideshow-photos .slideshow__item .content-wrapper {
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center
    }
    .slideshow__item .container>div,
    .slideshow__item .case .section--video .content-wrapper>div,
    .case .section--video .slideshow__item .content-wrapper>div,
    .slideshow__item .case .section--slideshow-videos .content-wrapper>div,
    .case .section--slideshow-videos .slideshow__item .content-wrapper>div,
    .slideshow__item .case .section--slideshow-photos .content-wrapper>div,
    .case .section--slideshow-photos .slideshow__item .content-wrapper>div {
        margin-left: 0
    }
    .slideshow__item .h1 {
        margin-bottom: 10px
    }
    .slideshow__item .h1 br {
        display: none
    }
    .slideshow--fullwidth .slideshow__list {
        left: -22px
    }
    .slideshow--fullwidth .slideshow__item {
        width: calc(100vw - 44px)
    }
    .slideshow--fullwidth .slideshow__item:last-child {
        width: 100vw
    }
    .slideshow--video-fullscreen .container,
    .slideshow--video-fullscreen .case .section--video .content-wrapper,
    .case .section--video .slideshow--video-fullscreen .content-wrapper,
    .slideshow--video-fullscreen .case .section--slideshow-videos .content-wrapper,
    .case .section--slideshow-videos .slideshow--video-fullscreen .content-wrapper,
    .slideshow--video-fullscreen .case .section--slideshow-photos .content-wrapper,
    .case .section--slideshow-photos .slideshow--video-fullscreen .content-wrapper {
        text-align: left
    }
}

.scrollbar {
    position: fixed;
    z-index: 50;
    right: 8px;
    top: 8px;
    width: 8px;
    height: calc(100% - 16px)
}

.scrollbar__thumb {
    display: block;
    height: 70px;
    width: 100%;
    background: #ccc;
    border-radius: 8px;
    position: relative;
    opacity: 0;
    -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0.8, 0.74, 1), opacity 1s cubic-bezier(0.26, 1.04, 0.54, 1);
    -o-transition: background-color 0.2s cubic-bezier(0.4, 0.8, 0.74, 1), opacity 1s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: background-color 0.2s cubic-bezier(0.4, 0.8, 0.74, 1), opacity 1s cubic-bezier(0.26, 1.04, 0.54, 1)
}

.scrollbar__thumb:hover,
.scrollbar__thumb:active {
    -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0.8, 0.74, 1), opacity 0.2s cubic-bezier(0.4, 0.8, 0.74, 1);
    -o-transition: background-color 0.2s cubic-bezier(0.4, 0.8, 0.74, 1), opacity 0.2s cubic-bezier(0.4, 0.8, 0.74, 1);
    transition: background-color 0.2s cubic-bezier(0.4, 0.8, 0.74, 1), opacity 0.2s cubic-bezier(0.4, 0.8, 0.74, 1);
    background-color: #b3b3b3;
    opacity: 0.9
}

.scrollbar__thumb:after {
    content: "";
    position: absolute;
    display: block;
    width: 200%;
    height: 100%;
    left: 50%;
    margin-left: -100%
}

.scrollbar__thumb.hidden {
    display: none
}

@media screen and (max-width: 740px) {
    .scrollbar {
        width: 4px
    }
}

.header {
    width: 100%
}

.nav {
    width: 100%
}

.nav__logo {
    position: fixed;
    z-index: 100;
    top: 40px;
    left: 0;
    margin: -3px 0 0 44px;
    font-size: 0;
    opacity: 0;
    visibility: hidden
}

.nav__logo>.logo-small {
    -webkit-transition: fill 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
    -o-transition: fill 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: fill 0.3s cubic-bezier(0.26, 1.04, 0.54, 1)
}

.nav__list {
    position: fixed;
    z-index: 100;
    top: 35px;
    right: 0;
    margin-right: 44px;
    height: 0
}

.nav__item {
    float: left;
    margin-left: 20px;
    opacity: 0;
    visibility: hidden
}

.nav__item .link {
    -webkit-transition: color 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
    -o-transition: color 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: color 0.3s cubic-bezier(0.26, 1.04, 0.54, 1)
}

.nav--white>.nav__logo>.logo-small {
    fill: #fff
}

.nav--white .nav__item .link {
    color: #fff
}

.nav--white .nav__item .link::after {
    background: #fff
}

.nav--white .burger {
    fill: #fff
}

.nav--black>.nav__logo>.logo-small {
    fill: #000
}

.nav--black .nav__item .link {
    color: #000
}

.nav--black .nav__item .link::after {
    background: #000
}

.nav--black .burger {
    fill: #000
}

@media screen and (max-width: 1024px) {
    .nav__logo {
        top: 44px;
        margin-left: 44px;
        position: absolute;
        opacity: 1;
        visibility: inherit
    }
    .nav__logo--white {
        fill: #fff
    }
    .nav__list {
        position: fixed;
        z-index: 101;
        background: #fff;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100%;
        margin-right: 0;
        -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
        transition: -webkit-transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
        -o-transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
        transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
        transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)
    }
    .nav__list ul {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%;
        -webkit-box-align: left;
        -webkit-align-items: left;
        -ms-flex-align: left;
        align-items: left
    }
    .nav__list .footer {
        position: absolute;
        bottom: 44px;
        background: none;
        text-align: left
    }
    .nav__list .footer .f {
        padding: 0
    }
    .nav__list.active {
        -webkit-transform: translate3d(calc(-100% + 175px), 0, 0);
        transform: translate3d(calc(-100% + 175px), 0, 0);
        -webkit-transition: -webkit-transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98);
        transition: -webkit-transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98);
        -o-transition: transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98);
        transition: transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98);
        transition: transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98), -webkit-transform 1.2s cubic-bezier(0.16, 1.08, 0.38, 0.98)
    }
    .nav__item {
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 44px;
        float: none;
        opacity: 1 !important;
        visibility: inherit !important;
        -webkit-transform: none !important;
        -ms-transform: none !important;
        transform: none !important
    }
    .nav__item a {
        display: block;
        color: #000 !important;
        font-size: 33px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 1.4
    }
    .burger,
    .close {
        z-index: 100;
        top: 34px;
        padding: 20px;
        -webkit-transition: fill 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
        -o-transition: fill 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
        transition: fill 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: top right;
        -ms-transform-origin: top right;
        transform-origin: top right
    }
    .burger {
        position: fixed;
        right: 34px
    }
    .close {
        position: absolute;
        right: 199px
    }
}

@media screen and (max-width: 740px) {
    .nav__logo {
        top: 22px;
        margin-left: 22px
    }
    .nav__logo .logo-small-dims {
        width: 75px;
        height: 20px
    }
    .nav__list.active {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        -webkit-transition: -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
        transition: -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
        -o-transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
        transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
        transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98), -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98)
    }
    .nav__item {
        margin-left: 22px
    }
    .nav__item.desktop {
        opacity: 0 !important;
        visibility: hidden !important
    }
    .burger-dims {
        width: 36px;
        height: 34px
    }
    .burger,
    .close {
        top: 12px;
        right: 12px
    }
}

@media screen and (max-height: 415px) {
    .nav__item {
        margin-top: 0;
        margin-bottom: 0
    }
    .nav .container,
    .nav .case .section--video .content-wrapper,
    .case .section--video .nav .content-wrapper,
    .nav .case .section--slideshow-videos .content-wrapper,
    .case .section--slideshow-videos .nav .content-wrapper,
    .nav .case .section--slideshow-photos .content-wrapper,
    .case .section--slideshow-photos .nav .content-wrapper {
        display: none
    }
}

.footer {
    background: #fff;
    margin-top: -1px
}

.footer .container,
.footer .case .section--video .content-wrapper,
.case .section--video .footer .content-wrapper,
.footer .case .section--slideshow-videos .content-wrapper,
.case .section--slideshow-videos .footer .content-wrapper,
.footer .case .section--slideshow-photos .content-wrapper,
.case .section--slideshow-photos .footer .content-wrapper {
    padding: 44px 0;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.footer .left a,
.footer .right a {
    display: inline-block;
    position: relative;
    color: #4a4a4a
}

.footer .left a::after,
.footer .right a::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    display: block;
    height: 1px;
    width: 100%;
    background: #4a4a4a;
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center;
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1), -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center
}

.footer .left a:hover::after,
.footer .right a:hover::after {
    -webkit-transform: scaleX(0.00001);
    -ms-transform: scaleX(0.00001);
    transform: scaleX(0.00001);
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center
}

.footer .left {
    color: #000;
    font-size: 14px
}

.footer .right {
    color: #000;
    font-size: 14px
}

@media screen and (max-width: 1024px) {
    .footer {
        width: 100%;
        text-align: left
    }
    .footer .f {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        line-height: 1.4
    }
    .footer .left {
        margin-bottom: 20px
    }
}

@media screen and (max-width: 740px) {
    .footer .f {
        padding: 0 0 7.43243vw 0;
        line-height: 1;
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -webkit-flex-direction: column-reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse
    }
    .footer .left,
    .footer .right {
        font-size: 13px
    }
    .footer .left {
        margin: 0
    }
    .footer .left a {
        color: #4a4a4a
    }
    .footer .right {
        margin-bottom: 5px
    }
}

.home__main {
    position: fixed;
    z-index: 1;
    background: #000;
    height: 100%;
    width: 100%
}

.home__main .slideshow {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.home__main .slideshow__item .container>.tx,
.home__main .slideshow__item .case .section--video .content-wrapper>.tx,
.case .section--video .home__main .slideshow__item .content-wrapper>.tx,
.home__main .slideshow__item .case .section--slideshow-videos .content-wrapper>.tx,
.case .section--slideshow-videos .home__main .slideshow__item .content-wrapper>.tx,
.home__main .slideshow__item .case .section--slideshow-photos .content-wrapper>.tx,
.case .section--slideshow-photos .home__main .slideshow__item .content-wrapper>.tx {
    max-width: 74.61937%;
    white-space: normal;
    position: absolute;
    left: 0;
    bottom: calc(50% - 75px);
    margin-left: 12.69031%
}

.home__main .slideshow__item .h1 {
    cursor: pointer;
    color: #fff;
    font-size: 11vw;
    letter-spacing: -0.04em;
    display: inline
}

.home__main .slideshow__item .h1:hover+.link::after {
    -webkit-transition: background 0.3s cubic-bezier(0.26, 1.04, 0.54, 1), -webkit-transform 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: background 0.3s cubic-bezier(0.26, 1.04, 0.54, 1), -webkit-transform 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition: transform 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98), background 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: transform 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98), background 0.3s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: transform 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98), background 0.3s cubic-bezier(0.26, 1.04, 0.54, 1), -webkit-transform 0.5s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.home__main .slideshow__item .link {
    margin-top: 30px;
    overflow: hidden;
    position: absolute;
    top: 100%;
    color: #fff
}

.home__main .slideshow__item.active {
    z-index: 0
}

.home__overlay {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    visibility: hidden
}

.home__overlay i {
    display: block;
    width: 20%;
    height: 100%;
    background: #000;
    float: left;
    -webkit-transform: scaleX(0.00001);
    -ms-transform: scaleX(0.00001);
    transform: scaleX(0.00001);
    -webkit-transform-origin: right;
    -ms-transform-origin: right;
    transform-origin: right
}

.home__intro {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden
}

.home__intro .background {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: #000
}

.home__intro__logo {
    margin: auto;
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 10px
}

.home__intro__logo .overlay {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    -webkit-transform: translate3d(calc(-100% - 1px), 0, 0);
    transform: translate3d(calc(-100% - 1px), 0, 0)
}

.home__intro__logo .logo-large {
    fill: #fff;
    opacity: 0
}

@media screen and (max-width: 740px) {
    .home .slideshow__item .h1 {
        font-size: 11.5vw;
        margin-bottom: 0
    }
    .home .slideshow__item .container>.tx,
    .home .slideshow__item .case .section--video .content-wrapper>.tx,
    .case .section--video .home .slideshow__item .content-wrapper>.tx,
    .home .slideshow__item .case .section--slideshow-videos .content-wrapper>.tx,
    .case .section--slideshow-videos .home .slideshow__item .content-wrapper>.tx,
    .home .slideshow__item .case .section--slideshow-photos .content-wrapper>.tx,
    .case .section--slideshow-photos .home .slideshow__item .content-wrapper>.tx {
        left: 0;
        bottom: calc(50% - 22px);
        width: 74.61937%;
        max-width: none;
        margin-left: 12.69031%
    }
    .home .slideshow__item .link {
        left: 50%;
        margin-left: -35px
    }
    .home .slideshow__item .btn {
        font-size: 14px;
        margin-left: 0;
        height: 40px;
        line-height: 40px;
        padding: 0 20px
    }
    .home .slideshow__item .btn .overlay span {
        padding: 0 20px
    }
    .home__intro__logo {
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5)
    }
}

.cases {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%
}

.cases>.container,
.case .section--video .cases>.content-wrapper,
.case .section--slideshow-videos .cases>.content-wrapper,
.case .section--slideshow-photos .cases>.content-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    margin: 0
}

.cases>.container::before,
.case .section--video .cases>.content-wrapper::before,
.case .section--slideshow-videos .cases>.content-wrapper::before,
.case .section--slideshow-photos .cases>.content-wrapper::before {
    content: "";
    display: block;
    width: 100%
}

.cases .slideshow {
    height: 100%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.cases .slideshow__list {
    height: auto;
    width: 100%
}

.cases .slideshow__item {
    width: 36.54843%;
    overflow: hidden;
    visibility: hidden
}

.cases .slideshow__item::before {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 56.25%
}

.cases .slideshow__item::after {
    content: "";
    position: absolute;
    z-index: 2;
    background: #000;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98), -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98)
}

.cases .slideshow__item .content {
    margin-top: 2vw;
    padding-left: 4.87203%;
    opacity: 0;
    -webkit-transition: opacity 1.4s cubic-bezier(0.26, 1.04, 0.54, 1) 0.1s;
    -o-transition: opacity 1.4s cubic-bezier(0.26, 1.04, 0.54, 1) 0.1s;
    transition: opacity 1.4s cubic-bezier(0.26, 1.04, 0.54, 1) 0.1s
}

.cases .slideshow__item a {
    color: #fff
}

.cases .slideshow__item .h2 {
    font-size: 1.5vw;
    font-weight: bold;
    display: inline-block
}

.cases .slideshow__item .h2 br {
    display: none
}

.cases .slideshow__item .p {
    color: #4a4a4a;
    font-size: 1.12vw;
    margin-top: 0.5vw
}

.cases .slideshow__item .media {
    width: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    cursor: pointer;
    -webkit-transform: translate3d(-40%, 0, 0);
    transform: translate3d(-40%, 0, 0);
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98), -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98)
}

.cases .slideshow__item.shown {
    visibility: inherit
}

.cases .slideshow__item.shown::after {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
}

.cases .slideshow__item.shown .media {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.cases .slideshow__item.shown .content {
    opacity: 1
}

.cases .slideshow__item.now::after,
.cases .slideshow__item.now .media,
.cases .slideshow__item.now .content {
    -webkit-transition: none;
    -o-transition: none;
    transition: none
}

.cases__nav {
    margin-left: 38.07094%;
    width: 23.85812%;
    position: absolute;
    z-index: 0;
    overflow: hidden;
    height: 18px;
    bottom: 13.5%;
    left: 0
}

.cases__nav::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 2px;
    top: 9px;
    left: 0;
    background: #4a4a4a;
    -webkit-transform: translate3d(calc(-100% - 1px), 0, 0);
    transform: translate3d(calc(-100% - 1px), 0, 0);
    -webkit-transform-origin: left;
    -ms-transform-origin: left;
    transform-origin: left;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.9, 0, 0.1, 1);
    transition: -webkit-transform 1s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: transform 1s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 1s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 1s cubic-bezier(0.9, 0, 0.1, 1), -webkit-transform 1s cubic-bezier(0.9, 0, 0.1, 1);
    opacity: 0.8
}

.cases__nav__thumb {
    display: block;
    position: absolute;
    z-index: 1;
    top: 9px;
    left: 0;
    width: 50px;
    height: 2px;
    cursor: pointer
}

.cases__nav__thumb::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 20px;
    left: 0;
    top: -8px
}

.cases__nav__thumb::after {
    content: "";
    display: block;
    background: #a5a7ac;
    width: 100%;
    height: 100%;
    -webkit-transition: background 0.5s cubic-bezier(0.26, 1.04, 0.54, 1), -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98) 0.6s;
    transition: background 0.5s cubic-bezier(0.26, 1.04, 0.54, 1), -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98) 0.6s;
    -o-transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98) 0.6s, background 0.5s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98) 0.6s, background 0.5s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98) 0.6s, background 0.5s cubic-bezier(0.26, 1.04, 0.54, 1), -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98) 0.6s;
    -webkit-transform: scaleX(0.00001) translateZ(0);
    transform: scaleX(0.00001) translateZ(0);
    -webkit-transform-origin: left;
    -ms-transform-origin: left;
    transform-origin: left
}

.cases__nav__thumb:hover::after {
    background: #f8f9fa
}

.cases__nav.shown::after {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
}

.cases__nav.shown .cases__nav__thumb::after {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
}

@media screen and (max-width: 960px) {
    .cases {
        position: relative
    }
    .cases__nav {
        display: none
    }
    .cases>.container,
    .case .section--video .cases>.content-wrapper,
    .case .section--slideshow-videos .cases>.content-wrapper,
    .case .section--slideshow-photos .cases>.content-wrapper {
        height: auto
    }
    .cases .slideshow {
        height: auto
    }
    .cases .slideshow__list {
        white-space: normal
    }
    .cases .slideshow__item {
        position: relative;
        width: 100%
    }
    .cases .slideshow__item .content {
        position: absolute;
        pointer-events: none;
        top: 0;
        margin-top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding-right: 17.51296%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
    .cases .slideshow__item .h2 {
        font-size: 54px;
        font-size: 7.03125vw
    }
    .cases .slideshow__item .p {
        margin-top: 10px;
        font-size: 26px;
        font-size: 3.38542vw;
        color: #fff
    }
}

.case {
    position: relative
}

.case__header {
    color: #fff;
    position: relative;
    overflow: hidden;
    height: 100vh
}

.case__header .h1-wrapper {
    position: absolute;
    bottom: calc(50% - 75px)
}

.case__header .h1 {
    font-size: 11vw;
    left: -0.4vw;
    letter-spacing: -0.04em;
    display: inline
}

.case__header .container,
.case__header .case .section--video .content-wrapper,
.case .section--video .case__header .content-wrapper,
.case__header .case .section--slideshow-videos .content-wrapper,
.case .section--slideshow-videos .case__header .content-wrapper,
.case__header .case .section--slideshow-photos .content-wrapper,
.case .section--slideshow-photos .case__header .content-wrapper {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.case__header .container>div,
.case__header .case .section--video .content-wrapper>div,
.case .section--video .case__header .content-wrapper>div,
.case__header .case .section--slideshow-videos .content-wrapper>div,
.case .section--slideshow-videos .case__header .content-wrapper>div,
.case__header .case .section--slideshow-photos .content-wrapper>div,
.case .section--slideshow-photos .case__header .content-wrapper>div {
    margin-left: 12.69031%;
    width: 74.61937%
}

.case__header .video-wrapper {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left
}

.case__header img {
    width: 100%
}

.case__header video,
.case__header canvas {
    width: calc(100% + 1px)
}

.case__header video::-webkit-media-controls-panel,
.case__header video::-webkit-media-controls-start-playback-button,
.case__header canvas::-webkit-media-controls-panel,
.case__header canvas::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none
}

.case__header .arrow-down {
    position: absolute;
    z-index: 3;
    bottom: 44px;
    right: 44px
}

.case__footer {
    background: #fff;
    padding: 17.51296% 0;
    text-align: center;
    position: relative;
    margin-top: -1px
}

.case__footer .h1 {
    font-size: 45px;
    margin-top: 5px
}

.case__footer .h1 br {
    display: none
}

.case__footer .h1 a {
    color: #000;
    position: relative;
    line-height: 1.5;
    display: inline-block;
    overflow: hidden;
    letter-spacing: -0.025em
}

.case__footer .h1 a::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    z-index: 0;
    bottom: 0;
    background: #000;
    -webkit-transform: translate3d(calc(-100% - 1px), 0, 0);
    transform: translate3d(calc(-100% - 1px), 0, 0);
    -webkit-transition: -webkit-transform 1.2s cubic-bezier(0.77, 0, 0.175, 1);
    transition: -webkit-transform 1.2s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)
}

.case__footer .h1 a:hover::after {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98), -webkit-transform 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -webkit-transform: translate3d(0%, 0, 0);
    transform: translate3d(0%, 0, 0)
}

.case__footer .link-wrapper {
    position: absolute;
    width: 100%;
    top: calc(100% + 26px)
}

.case__footer .link {
    font-size: 23px;
    font-weight: bold;
    display: inline-block;
    color: #000;
    letter-spacing: -0.025em
}

.case__footer .link:hover,
.case__footer .link:active {
    color: #000
}

.case__footer .link::after {
    background: #000
}

.case .section .h1 {
    line-height: 1
}

.case .section .media {
    position: relative
}

.case .section .media>img,
.case .section .media>video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block
}

.case .section--text-image,
.case .section--image-text {
    font-size: 0;
    padding: 11.1678% 0;
    background: #fff
}

.case .section--text-image+.section--image-text,
.case .section--text-image+.section--text-image,
.case .section--image-text+.section--image-text,
.case .section--image-text+.section--text-image {
    margin-top: -11.1678%
}

.case .section--text-image .left,
.case .section--text-image .right,
.case .section--image-text .left,
.case .section--image-text .right {
    display: inline-block;
    vertical-align: middle
}

.case .section--text-image .title,
.case .section--image-text .title {
    width: 82.63904%;
    font-size: 30px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-weight: bold;
    margin-bottom: 50px
}

.case .section--text-image .p,
.case .section--image-text .p {
    color: #333333;
    font-size: 15px;
    line-height: 1.67;
    letter-spacing: 0.01em;
    font-weight: normal
}

.case .section--text-image {
    text-align: right
}

.case .section--text-image .left {
    text-align: left;
    width: 42.89359%;
    margin-right: 20.55798%
}

.case .section--text-image .right {
    width: calc(23.85812% + 44px);
    margin-right: -44px
}

.case .section--image-text .left {
    width: 42.89359%;
    margin-left: 6.34516%
}

.case .section--image-text .right {
    width: 36.54843%;
    margin-left: 7.86767%
}

.case .section--awards {
    background: #000;
    color: #fff;
    text-align: center;
    padding: 11.1678% 0 calc(11.1678% - 40px)
}

.case .section--awards .title {
    color: #4a4a4a;
    margin-bottom: 4.82265%;
    font-size: 16px
}

.case .section--awards .list {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.case .section--awards .list__item {
    width: 26.90314%;
    font-size: 14px;
    color: #7b7b7b;
    margin-bottom: 40px
}

.case .section--awards .list__item .f {
    height: 120px
}

.case .section--awards .list img {
    margin: auto;
    max-width: 180px;
    max-height: 75px
}

.case .section--awards .list h2 {
    justify-self: flex-end;
    width: 100%
}

.case .section .videoplayer-overlay {
    color: #fff
}

.case .section .videoplayer-overlay .content-wrapper {
    position: relative;
    z-index: 1
}

.case .section .videoplayer-overlay .content-wrapper .content {
    margin-left: 12.69031%;
    width: 61.92906%
}

.case .section .videoplayer-overlay .h1 {
    font-size: 55px;
    font-size: 4.29688vw;
    margin-bottom: 20px;
    margin-left: 0
}

.case .section--slideshow-photos {
    background: #fff
}

.case .section--slideshow-photos .videoplayer-overlay {
    background: none;
    -webkit-transition: opacity 1s cubic-bezier(0.26, 1.04, 0.54, 1), visibility 1s;
    -o-transition: opacity 1s cubic-bezier(0.26, 1.04, 0.54, 1), visibility 1s;
    transition: opacity 1s cubic-bezier(0.26, 1.04, 0.54, 1), visibility 1s
}

.case .section--slideshow-videos {
    position: relative;
    background: #000
}

.case .section--slideshow-videos .slideshow {
    overflow: hidden
}

.case .section--slideshow-videos .slideshow__item:first-child .controls__prev {
    opacity: 0.5
}

.case .section--slideshow-videos .slideshow__item:first-child .controls__prev button {
    cursor: default
}

.case .section--slideshow-videos .slideshow__item:last-child .controls__next {
    opacity: 0.5
}

.case .section--slideshow-videos .slideshow__item:last-child .controls__next button {
    cursor: default
}

.case .section--slideshow-videos::before,
.case .section--slideshow-videos::after {
    content: "";
    display: block;
    height: 2px;
    background: #fff;
    width: 100%;
    position: absolute;
    z-index: 100
}

.case .section--slideshow-videos::before {
    top: -1px
}

.case .section--slideshow-videos::after {
    bottom: -1px
}

.case .section--slideshow-videos .link--nav {
    position: absolute;
    top: 44px;
    right: 44px;
    color: #fff
}

.case .section--slideshow-videos .slideshow__nav {
    position: absolute;
    z-index: 1;
    color: #000;
    top: -1px;
    width: 100%;
    height: 100%;
    visibility: hidden;
    -webkit-transition: visibility 1s;
    -o-transition: visibility 1s;
    transition: visibility 1s
}

.case .section--slideshow-videos .slideshow__nav .background {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    opacity: 0;
    -webkit-transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    transition: opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    display: block;
    cursor: url(../img/cursor-close.cur), pointer;
    cursor: url(../img/cursor-close.svg) 27 27, pointer
}

.case .section--slideshow-videos .slideshow__nav .scrollbar__thumb {
    opacity: 0;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s
}

.case .section--slideshow-videos .slideshow__nav.active {
    visibility: inherit
}

.case .section--slideshow-videos .slideshow__nav.active .scrollbar__thumb {
    -webkit-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
    transition-delay: 0.5s;
    -webkit-transition-duration: 1s;
    -o-transition-duration: 1s;
    transition-duration: 1s;
    opacity: 1
}

.case .section--slideshow-videos .slideshow__nav.active .background {
    -webkit-transition: opacity 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition: opacity 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: opacity 1s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    opacity: 0.5
}

.case .section--slideshow-videos .slideshow__nav .container,
.case .section--slideshow-videos .slideshow__nav .content-wrapper {
    height: 100%;
    position: relative
}

.case .section--slideshow-videos .slideshow__nav .scrollbar {
    position: absolute !important;
    z-index: 2;
    right: 0;
    width: 4px;
    border-radius: 4px
}

.case .section--slideshow-videos .slideshow__nav__list {
    background: #fff;
    outline: 1px solid #fff;
    padding-right: 44px;
    margin-right: -44px;
    top: 0;
    right: 0;
    width: 30.20327%;
    min-height: 100%;
    position: absolute !important;
    z-index: 2
}

.case .section--slideshow-videos .slideshow__nav__item {
    display: block;
    cursor: pointer;
    width: 63.02453%;
    margin: 0 0 0 21.00818%;
    margin-bottom: 3.125vw;
    opacity: 0.8;
    -webkit-transition: opacity 0.5s cubic-bezier(0.26, 1.04, 0.54, 1);
    -o-transition: opacity 0.5s cubic-bezier(0.26, 1.04, 0.54, 1);
    transition: opacity 0.5s cubic-bezier(0.26, 1.04, 0.54, 1)
}

.case .section--slideshow-videos .slideshow__nav__item:hover {
    opacity: 0.9
}

.case .section--slideshow-videos .slideshow__nav__item.active {
    opacity: 1
}

.case .section--slideshow-videos .slideshow__nav__item .h2 {
    font-size: 1.5625vw;
    font-weight: bold;
    margin: 1.09375vw 0 .46875vw
}

.case .section--slideshow-videos .slideshow__nav__item .baseline {
    font-size: 1.09375vw
}

.case .section--slideshow-videos .slideshow__nav__item:first-child {
    margin-top: 3.125vw
}

.case .section--slideshow-videos .slideshow__nav__item img {
    width: 100%
}

.case .section--video .content-wrapper,
.case .section--slideshow-videos .content-wrapper,
.case .section--slideshow-photos .content-wrapper {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}

.case .section--video .video-wrapper,
.case .section--slideshow-videos .video-wrapper,
.case .section--slideshow-photos .video-wrapper {
    width: 100%
}

.case .section:last-of-type {
    padding-bottom: 0;
    border-bottom: 44px solid white
}

.case .section:last-of-type .p:last-of-type {
    margin-bottom: 0
}

@media screen and (max-width: 1024px) {
    .case__header .arrow-down {
        bottom: 88px
    }
    .case__footer {
        text-align: left;
        padding: 7.86767% 0
    }
    .case__footer .p,
    .case__footer .h1 {
        margin-left: 0
    }
    .case__footer .link-wrapper {
        top: auto;
        bottom: 0;
        position: relative;
        margin-left: 44px;
        margin-top: 11.1678%;
        margin-bottom: 0
    }
}

@media screen and (max-width: 960px) {
    .case .section--text-image .left {
        font-size: 20px;
        font-size: 2.60417vw;
        width: 69.79673%;
        margin-right: 6.34516%
    }
    .case .section--image-text .title {
        font-size: 20px;
        font-size: 2.60417vw;
        margin-bottom: 35px;
        margin-bottom: 4.55729vw
    }
    .case .section--slideshow-photos .slideshow__item .content-wrapper {
        text-align: left
    }
    .case .section .videoplayer-overlay .content-wrapper .content,
    .case .section .videoplayer-overlay .btn-play {
        margin-left: 0
    }
}

@media screen and (max-width: 740px) {
    .case__header {
        text-align: center
    }
    .case__header .arrow-down {
        bottom: 44px;
        right: 22px
    }
    .case__header .h1-wrapper {
        bottom: calc(50% - 22px);
        max-width: none;
        width: 87.30969%
    }
    .case__header .h1 {
        font-size: 11.5vw
    }
    .case__header .h1 br {
        display: none
    }
    .case .section--text-image {
        padding: 0
    }
    .case .section--text-image .container,
    .case .section--text-image .section--video .content-wrapper,
    .case .section--video .section--text-image .content-wrapper,
    .case .section--text-image .section--slideshow-videos .content-wrapper,
    .case .section--slideshow-videos .section--text-image .content-wrapper,
    .case .section--text-image .section--slideshow-photos .content-wrapper,
    .case .section--slideshow-photos .section--text-image .content-wrapper {
        text-align: left
    }
    .case .section--text-image .left {
        padding: 120px 0;
        font-size: 20px;
        width: 74.61937%
    }
    .case .section--text-image .right {
        display: none
    }
    .case .section--text-image .title {
        font-size: 20px;
        width: 100%
    }
    .case .section--image-text {
        padding: 0
    }
    .case .section--image-text .left {
        width: calc(100% + 44px);
        margin-left: -22px
    }
    .case .section--image-text .right {
        width: 74.61937%;
        margin-left: 0
    }
    .case .section--image-text .right .p {
        font-size: 13px;
        line-height: 1.7;
        margin: 50px 0
    }
    .case .section--image-text .title {
        font-size: 20px;
        width: 61.92906%;
        margin: 100px 0 25px 22px
    }
    .case .section--awards {
        padding: 50px 0 10px 0
    }
    .case .section--awards .list__item {
        width: 50%
    }
    .case .section--slideshow-videos .slideshow__nav__list {
        width: 80.96453%
    }
    .case .section--slideshow-videos .slideshow__nav__item {
        width: 86.20655%;
        margin-left: 7.83696%
    }
    .case .section--slideshow-videos .slideshow__nav__item .h2 {
        font-size: 14px
    }
    .case .section--slideshow-videos .slideshow__nav__item .baseline {
        font-size: 12px
    }
    .case .section--slideshow-videos .link--nav {
        top: 22px;
        right: 22px
    }
    .case .section .videoplayer-overlay .h1 {
        font-size: 20px
    }
    .case .section .videoplayer-overlay .content-wrapper .content {
        margin-left: 0;
        width: 74.61937%
    }
    .case .section:last-of-type {
        border-bottom: 22px solid white
    }
    .case__footer .p {
        margin-left: 0
    }
    .case__footer .h1 {
        margin-left: 0;
        padding-right: 11.1678%
    }
    .case__footer .h1 a {
        font-size: 11.5vw;
        letter-spacing: -0.04em;
        line-height: 1.08
    }
    .case__footer .h1 a::after {
        display: none
    }
    .case__footer .link {
        font-size: 20px
    }
    .case__footer .link-wrapper {
        margin-left: 22px
    }
    .case__footer .link-wrapper a {
        letter-spacing: 0;
        font-size: 13px
    }
}

@media screen and (max-width: 415px) {
    .case .r--16-9::after {
        padding-bottom: 100%
    }
    .case .slideshow__nav__item .r--16-9::after {
        padding-bottom: 56.25%
    }
    .case .slideshow--fullwidth .slideshow__item img {
        width: auto;
        height: 101%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%)
    }
    .case .slideshow--fullwidth .slideshow__item:last-child img {
        left: 0;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
        width: auto
    }
    .case .section--text-image .left {
        width: 93.65484%
    }
    .case .section--image-text .right {
        width: 87.30969%
    }
    .case__footer {
        padding: 30.20327% 0
    }
}

.career {
    position: relative
}

.career .poster {
    width: 100%;
    height: 100%
}

.career .scrollable {
    background: #fff
}

.career .content {
    padding-top: 180px;
    padding-top: 14.0625vw
}

.career .content p {
    color: #171717;
    font-weight: bold;
    font-size: 40px;
    font-size: 3.125vw;
    line-height: 50px;
    line-height: 3.90625vw;
    font-family: "antoni-web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: -0.02em;
    width: 64.97408%;
    margin-left: 12.69031%;
    margin-bottom: 155px;
    margin-bottom: 12.10938vw
}

.career .job {
    width: 100%;
    margin-bottom: 190px;
    margin-bottom: 14.84375vw;
    -webkit-transition: margin 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: margin 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: margin 0.8s cubic-bezier(0.9, 0, 0.1, 1)
}

.career .job li {
    cursor: pointer;
    font-size: 0;
    white-space: nowrap;
    line-height: 75px;
    line-height: 5.85938vw;
    height: 75px;
    height: 5.85938vw;
    display: block;
    border-top: 1px solid #ededed;
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1), -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1)
}

.career .job li:first-of-type {
    line-height: 85px;
    line-height: 6.64062vw;
    height: 85px;
    height: 6.64062vw;
    border: 0
}

.career .job li:last-of-type {
    border-bottom: 1px solid #ededed
}

.career .job li:not(:first-of-type):hover .col-1 {
    -webkit-transform: translate3d(15px, 0, 0);
    transform: translate3d(15px, 0, 0)
}

.career .job li.open .description-col {
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.4s ease 0.4s;
    -o-transition: all 0.4s ease 0.4s;
    transition: all 0.4s ease 0.4s
}

.career .job li .container,
.career .job li .case .section--video .content-wrapper,
.case .section--video .career .job li .content-wrapper,
.career .job li .case .section--slideshow-videos .content-wrapper,
.case .section--slideshow-videos .career .job li .content-wrapper,
.career .job li .case .section--slideshow-photos .content-wrapper,
.case .section--slideshow-photos .career .job li .content-wrapper {
    position: relative
}

.career .job li span {
    z-index: 10;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    font-size: 1.09375vw;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    font-family: "antoni-web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgba(74, 74, 74, 0.55);
    position: relative
}

.career .job li .position {
    color: #000;
    font-weight: bold;
    font-size: 25px;
    font-size: 1.95312vw;
    letter-spacing: -.5px;
    letter-spacing: -.03906vw
}

.career .job .col-1,
.career .job .col-2,
.career .job .col-3 {
    display: inline-block
}

.career .job .col-1 {
    width: 36.54843%;
    margin-left: 12.69031%;
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: -webkit-transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition: transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition: transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98), -webkit-transform 0.8s cubic-bezier(0.16, 1.08, 0.38, 0.98)
}

.career .job .col-2 {
    width: 11.1678%;
    margin-left: 7.86767%
}

.career .job .col-3 {
    width: 23.85812%;
    margin-left: 7.86767%
}

.career .job .description-col {
    opacity: 0;
    visibility: hidden;
    color: #333333;
    white-space: normal;
    font-size: 14px;
    font-size: 1.09375vw;
    line-height: 22px;
    line-height: 1.71875vw;
    position: absolute;
    top: 75px;
    top: 5.85938vw;
    left: 0;
    display: block;
    max-width: 52.28376%;
    margin-left: 12.69031%;
    padding-top: 60px;
    padding-top: 4.6875vw;
    padding-bottom: 50px;
    padding-bottom: 3.90625vw;
    -webkit-transition: all 0.2s ease 0s;
    -o-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s
}

.career .job .description-col .apply-link {
    color: #191919;
    font-weight: bold;
    font-size: 15px;
    font-size: 1.17188vw;
    line-height: 35px;
    line-height: 2.73438vw;
    display: block;
    margin-top: 25px;
    margin-top: 1.95312vw
}

.career .job .description-col .apply-link:hover {
    opacity: 0.7
}

.career .apply {
    padding-top: 175px;
    padding-top: 13.67188vw;
    padding-bottom: 270px;
    padding-bottom: 21.09375vw;
    background: #000
}

.career .apply a {
    display: block
}

.career .apply h3 {
    color: #fefefe;
    font-weight: bold;
    text-align: center;
    font-size: 180px;
    font-size: 14.0625vw;
    font-family: "antoni-web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 180px;
    line-height: 14.0625vw;
    letter-spacing: -2.5px;
    letter-spacing: -.19531vw;
    display: block;
    position: relative
}

.career .apply h3::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -25px;
    bottom: -1.95312vw;
    display: block;
    width: 40%;
    height: 15px;
    height: 1.17188vw;
    margin: 0 auto;
    background: #fefefe;
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center;
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1), -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1)
}

.career .apply h3:hover::after {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center
}

.career .apply p {
    color: #7b7b7b;
    font-family: "antoni-web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-size: 1.09375vw;
    line-height: 28px;
    line-height: 2.1875vw;
    width: 23.85812%;
    margin-left: 49.23875%;
    margin-top: 45px;
    margin-top: 3.51562vw
}

.career .apply span {
    color: #4a4a4a;
    font-size: 14px;
    font-size: 1.09375vw;
    line-height: 28px;
    line-height: 2.1875vw;
    position: relative;
    display: inline-block;
    margin-left: 49.23875%
}

.career .apply span::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: #4a4a4a;
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center;
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1), -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1)
}

.career .apply span:hover::after {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center
}

.career .footer {
    background: #000
}

.career .footer .left {
    color: #4a4a4a
}

.career .footer .right {
    color: #7b7b7b
}

.career .footer .right a {
    color: #7b7b7b
}

.career .footer .right a::after {
    background: #7b7b7b
}

@media screen and (max-width: 960px) {
    .career .job li {
        line-height: 62px;
        line-height: 8.07292vw;
        height: 60px;
        height: 7.8125vw
    }
    .career .job li:first-of-type {
        line-height: 75px;
        line-height: 9.76562vw;
        height: 75px;
        height: 9.76562vw
    }
    .career .job li span {
        font-size: 12px;
        font-size: 1.5625vw
    }
    .career .job .col-1 {
        width: 41.11596%;
        margin-left: 7.86767%
    }
    .career .job .description-col {
        margin-left: 7.86767%
    }
}

@media screen and (max-width: 1024px) {
    .career .job li:not(:first-of-type):hover .col-1 {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

@media screen and (max-width: 740px) {
    .career .content {
        padding-top: 260px;
        padding-top: 35.13514vw
    }
    .career .content p {
        font-size: 40px;
        font-size: 5.40541vw;
        line-height: 50px;
        line-height: 6.75676vw;
        letter-spacing: -2px;
        letter-spacing: -.27027vw;
        width: 90%;
        margin-left: 0;
        margin-bottom: 250px;
        margin-bottom: 33.78378vw
    }
    .career .job {
        margin-bottom: 195px;
        margin-bottom: 26.35135vw
    }
    .career .job li {
        line-height: 1;
        height: auto;
        padding-top: 40px;
        padding-top: 5.40541vw;
        margin-bottom: 40px;
        margin-bottom: 5.40541vw
    }
    .career .job li:nth-of-type(2) {
        border-top: 0;
        padding-top: 0
    }
    .career .job li:last-of-type {
        padding-bottom: 40px;
        padding-bottom: 5.40541vw
    }
    .career .job li:last-of-type.open {
        border-bottom: 0px solid #ededed
    }
    .career .job li:not(:first-of-type):hover .col-1 {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
    .career .job li.head {
        display: none
    }
    .career .job li span {
        font-size: 23px;
        font-size: 3.10811vw;
        line-height: 30px;
        line-height: 4.05405vw
    }
    .career .job li .position {
        font-size: 40px;
        font-size: 5.40541vw;
        line-height: 50px;
        line-height: 6.75676vw;
        letter-spacing: -.5px;
        letter-spacing: -.06757vw
    }
    .career .job .col-1,
    .career .job .col-2,
    .career .job .col-3 {
        margin-left: 0
    }
    .career .job .col-2,
    .career .job .col-3 {
        display: inline-block;
        width: auto
    }
    .career .job .col-1 {
        display: block;
        width: 100%
    }
    .career .job .col-3::before {
        content: 'â€” ';
        display: inline;
        margin-left: 8px;
        margin-left: 1.08108vw
    }
    .career .job .description-col {
        font-size: 23px;
        font-size: 3.10811vw;
        line-height: 30px;
        line-height: 4.05405vw;
        top: 120px;
        top: 16.21622vw;
        max-width: 100%;
        margin-left: 0;
        padding-top: 0;
        padding-bottom: 60px;
        padding-bottom: 8.10811vw
    }
    .career .job .description-col .apply-link {
        font-size: 25px;
        font-size: 3.37838vw;
        line-height: 30px;
        line-height: 4.05405vw;
        margin-top: 50px;
        margin-top: 6.75676vw
    }
    .career .apply {
        position: relative;
        padding-top: 305px;
        padding-top: 41.21622vw;
        padding-bottom: 250px;
        padding-bottom: 33.78378vw
    }
    .career .apply::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        display: block;
        width: 100%;
        height: 10px;
        background: #000
    }
    .career .apply h3 {
        font-size: 180px;
        font-size: 24.32432vw;
        line-height: 180px;
        line-height: 24.32432vw;
        letter-spacing: -2.5px;
        letter-spacing: -.33784vw
    }
    .career .apply h3::after {
        display: none
    }
    .career .apply p {
        font-size: 24px;
        font-size: 3.24324vw;
        line-height: 34px;
        line-height: 4.59459vw;
        width: 61.92906%;
        margin-left: 36.54843%;
        margin-top: 35px;
        margin-top: 4.72973vw;
        margin-bottom: 15px;
        margin-bottom: 2.02703vw;
        padding-right: 6.34516%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
    .career .apply span {
        z-index: 5;
        position: relative;
        font-size: 24px;
        font-size: 3.24324vw;
        line-height: 34px;
        line-height: 4.59459vw;
        margin-left: 36.54843%
    }
    .career .footer {
        padding-top: 5px
    }
}

.contact {
    position: relative
}

.contact .poster {
    width: 100%;
    height: 100%
}

.contact .scrollable {
    background: #fff
}

.contact .left,
.contact .right {
    display: inline-block;
    vertical-align: middle
}

.contact .img-wrapper {
    overflow: hidden;
    position: relative;
    height: 0
}

.contact .img-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1), -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1)
}

.contact .img-wrapper.shown::after {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
}

.contact .img-wrapper img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block
}

.contact .content {
    font-size: 0
}

.contact .content .left,
.contact .content .right {
    margin-top: 145px;
    margin-top: 11.32812vw;
    margin-bottom: 150px;
    margin-bottom: 11.71875vw
}

.contact .content .left {
    width: 42.89359%;
    margin-right: 20.55798%;
    margin-left: 12.69031%
}

.contact .content .right {
    width: calc(23.85812% + 44px);
    margin-right: -44px
}

.contact .content .right .img-wrapper::after {
    background: #fff
}

.contact .content .text {
    color: #171717;
    font-weight: bold;
    font-size: 25px;
    font-size: 1.95312vw;
    line-height: 1.4;
    font-family: "antoni-web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: -0.02em
}

.contact .location {
    position: relative;
    margin-bottom: 105px;
    margin-bottom: 8.20312vw
}

.contact .location ul {
    white-space: nowrap;
    will-change: transform;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.9, 0, 0.1, 1);
    transition: -webkit-transform 1s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: transform 1s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 1s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 1s cubic-bezier(0.9, 0, 0.1, 1), -webkit-transform 1s cubic-bezier(0.9, 0, 0.1, 1)
}

.contact .location .location-item {
    display: inline-block;
    width: 61.92906%;
    margin-left: 6.34516%;
    -webkit-transition: opacity 0.3s ease;
    -o-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease
}

.contact .location .location-item.hidden {
    opacity: 0
}

.contact .location .location-item.active.img-right .left .img-wrapper::after {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
}

.contact .location .location-item.active .city {
    color: #202020
}

.contact .location .location-item.active address {
    color: #7b7b7b
}

.contact .location .location-item.active .infos li.map a {
    color: #7b7b7b
}

.contact .location .location-item.active .infos a {
    color: #171717
}

.contact .location .location-item.img-right .right {
    margin-left: 0
}

.contact .location .location-item.img-right .left {
    margin-left: 20.49169%
}

.contact .location .location-item.img-right .left .img-wrapper::after {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s;
    transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s;
    -o-transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s;
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s;
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s, -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s
}

.contact .location .location-item.img-right .city {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.contact .location .location-item .left {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
    width: 59.01661%;
    margin-top: 40px;
    margin-top: 3.125vw;
    margin-bottom: 85px;
    margin-bottom: 6.64062vw
}

.contact .location .location-item .left .img-wrapper {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.contact .location .location-item .left .img-wrapper img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.contact .location .location-item .right {
    z-index: 5;
    position: relative;
    width: 28.27907%;
    margin-left: 7.78737%;
    margin-top: -85px;
    margin-top: -6.64062vw
}

.contact .location .city {
    color: #c5c5c5;
    cursor: pointer;
    font-weight: bold;
    font-size: 180px;
    font-size: 14.0625vw;
    font-family: "antoni-web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 180px;
    line-height: 14.0625vw;
    letter-spacing: -.25px;
    letter-spacing: -.01953vw;
    display: inline-block;
    white-space: nowrap;
    margin-left: -5px;
    margin-left: -.39062vw;
    -webkit-transform: translate3d(-51.22924%, 0, 0);
    transform: translate3d(-51.22924%, 0, 0);
    -webkit-transition: color 0.8s cubic-bezier(0.9, 0, 0.1, 1), -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: color 0.8s cubic-bezier(0.9, 0, 0.1, 1), -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1), color 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1), color 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1), color 0.8s cubic-bezier(0.9, 0, 0.1, 1), -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1)
}

.contact .location .city:hover {
    color: #b3b3b3
}

.contact .location address {
    font-size: 14px;
    font-size: 1.09375vw;
    line-height: 24px;
    line-height: 1.875vw;
    color: rgba(74, 74, 74, 0.3);
    margin-top: 10px;
    margin-top: .78125vw;
    -webkit-transition: color 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: color 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: color 0.8s cubic-bezier(0.9, 0, 0.1, 1)
}

.contact .location .infos {
    margin-top: 25px;
    margin-top: 1.95312vw
}

.contact .location .infos li.map {
    margin-top: 20px;
    margin-top: 1.5625vw
}

.contact .location .infos li.map a {
    line-height: 24px;
    line-height: 1.875vw
}

.contact .location .infos a {
    color: rgba(74, 74, 74, 0.3);
    text-decoration: none;
    font-size: 14px;
    font-size: 1.09375vw;
    line-height: 20px;
    line-height: 1.5625vw;
    -webkit-transition: color 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    -o-transition: color 0.8s cubic-bezier(0.9, 0, 0.1, 1);
    transition: color 0.8s cubic-bezier(0.9, 0, 0.1, 1)
}

.contact .location .infos a:hover {
    text-decoration: underline
}

@media screen and (max-width: 960px) {
    .contact .content .text {
        font-size: 20px;
        font-size: 2.60417vw
    }
    .contact .location address {
        font-size: 12px;
        font-size: 1.5625vw;
        line-height: 18px;
        line-height: 2.34375vw
    }
}

@media screen and (max-width: 740px) {
    .contact .content .left,
    .contact .content .right {
        display: block
    }
    .contact .content .left {
        width: 90%;
        margin-left: 0;
        margin-right: 0;
        margin-top: 280px;
        margin-top: 37.83784vw;
        margin-bottom: 280px;
        margin-bottom: 37.83784vw
    }
    .contact .content .right {
        display: none;
        width: calc(61.92906% + 22px);
        margin-left: auto;
        margin-right: -22px;
        margin-bottom: 275px;
        margin-bottom: 37.16216vw
    }
    .contact .content .text {
        font-size: 40px;
        font-size: 5.40541vw;
        line-height: 50px;
        line-height: 6.75676vw;
        letter-spacing: -2px;
        letter-spacing: -.27027vw
    }
    .contact .location {
        margin-bottom: 0;
        background: #000;
        padding-top: 230px;
        padding-top: 31.08108vw;
        padding-bottom: 65px;
        padding-bottom: 8.78378vw
    }
    .contact .location::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 10px;
        width: 100%;
        background: #000
    }
    .contact .location .location-item {
        width: 100%;
        margin-left: 0
    }
    .contact .location .location-item.active .city {
        color: #fefefe
    }
    .contact .location .location-item.active address {
        color: #bdbdbd
    }
    .contact .location .location-item.active .infos li.map a {
        color: #bdbdbd
    }
    .contact .location .location-item.active .infos a {
        color: #7b7b7b
    }
    .contact .location .location-item.img-right .left {
        float: right;
        margin-left: auto;
        margin-right: 0;
        margin-top: -70px;
        margin-top: -9.45946vw
    }
    .contact .location .location-item.img-right .left .img-wrapper::after {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s;
        transition: -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s;
        -o-transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s;
        transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s;
        transition: transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s, -webkit-transform 0.8s cubic-bezier(0.9, 0, 0.1, 1) 0.1s
    }
    .contact .location .location-item.img-right .city {
        font-size: 130px;
        font-size: 17.56757vw;
        line-height: 130px;
        line-height: 17.56757vw;
        margin-top: 35px;
        margin-top: 4.72973vw
    }
    .contact .location .location-item .left {
        width: 39.59345%;
        margin-left: -22px
    }
    .contact .location .location-item .left .img-wrapper {
        padding-bottom: 191.07% !important
    }
    .contact .location .location-item .left .img-wrapper::after {
        display: none
    }
    .contact .location .location-item .left .img-wrapper img {
        width: auto;
        height: 100%
    }
    .contact .location .location-item .right {
        width: 23.85812%;
        margin-left: 4.82265%
    }
    .contact .location .city {
        color: #202020;
        font-size: 180px;
        font-size: 24.32432vw;
        line-height: 180px;
        line-height: 24.32432vw;
        letter-spacing: -.25px;
        letter-spacing: -.03378vw;
        margin-left: -5px;
        margin-left: -.67568vw;
        -webkit-transform: translate3d(-38.07094%, 0, 0);
        transform: translate3d(-38.07094%, 0, 0)
    }
    .contact .location address {
        font-size: 22px;
        font-size: 2.97297vw;
        line-height: 38px;
        line-height: 5.13514vw;
        margin-top: 15px;
        margin-top: 2.02703vw
    }
    .contact .location .infos {
        margin-top: 10px;
        margin-top: 1.35135vw
    }
    .contact .location .infos li.map {
        margin-top: 20px;
        margin-top: 2.7027vw
    }
    .contact .location .infos li.map a {
        line-height: 24px;
        line-height: 3.24324vw
    }
    .contact .location .infos a {
        font-size: 22px;
        font-size: 2.97297vw;
        line-height: 38px;
        line-height: 5.13514vw
    }
    .contact .footer {
        padding-top: 5px;
        background: #000
    }
    .contact .footer .left {
        color: #4a4a4a
    }
    .contact .footer .right {
        color: #7b7b7b
    }
    .contact .footer .right a {
        color: #7b7b7b
    }
    .contact .footer .right a::after {
        background: #7b7b7b
    }
}

.cools {
    position: relative;
    background: #fff
}

.cools .scrollable {
    z-index: 2;
    padding-top: 80vh
}

.cools .footer {
    padding-top: 4.82265%;
    position: relative
}

.cools__header {
    position: fixed;
    background: #fff;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

.cools__header .h1 {
    color: #000;
    margin: auto;
    line-height: 1;
    letter-spacing: -0.02em
}

.cools .row {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.cools .row .col {
    width: 49.23875%
}

.cools .row .col .media {
    position: relative;
    display: block;
    overflow: hidden
}

.cools .row .col .media img {
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: block
}

.cools .row .col .media video {
    height: 100%;
    left: 50%;
    position: absolute;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
}

.cools .row .col .media .description {
    position: absolute;
    z-index: 2;
    display: block;
    bottom: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition: -webkit-transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    will-change: transform
}

.cools .row .col .media .description h2 {
    color: #fff;
    font-weight: bold;
    line-height: 1.3;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition: -webkit-transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    -webkit-transform: translate3d(0, 100px, 0);
    transform: translate3d(0, 100px, 0)
}

.cools .row .col .media .description p {
    font-size: 14px;
    line-height: 1.4;
    color: #a7a7a7;
    letter-spacing: 0.02em;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition: -webkit-transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1), -webkit-transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    -webkit-transform: translate3d(0, 100px, 0);
    transform: translate3d(0, 100px, 0)
}

.cools .row .col .media--small .description {
    background: #000;
    width: 100%;
    height: 100%;
    padding: 11.24328%
}

.cools .row .col .media--small .description h2 {
    font-size: 1.95312vw;
    margin-bottom: 1.17188vw
}

.cools .row .col .media--large .description {
    width: 100%
}

.cools .row .col .media--large .description .wrapper {
    display: inline-block;
    background: #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 80.41117%;
    padding: 9.79442%;
    margin: 0 0 9.79442% 9.79442%;
    overflow: hidden
}

.cools .row .col .media--large .description h2 {
    font-size: 2.34375vw;
    margin-bottom: 1.5625vw
}

.cools .row .col .media--large .description h2,
.cools .row .col .media--large .description p {
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0)
}

.cools .row .col .media:hover .description {
    -webkit-transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.cools .row .col .media:hover h2,
.cools .row .col .media:hover p {
    -webkit-transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -o-transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
    transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.cools .row:nth-child(2n+1) {
    margin-bottom: 11.1678%
}

.cools .row:nth-child(2n+1) .col--1 .media {
    width: 48.45395%
}

.cools .row:nth-child(2n+1) .col--1 .media--1 {
    margin-left: 25.77302%;
    margin-top: -3.04502%;
    margin-bottom: 15.97861%
}

.cools .row:nth-child(2n+1) .col--1 .media--3 {
    margin: 15.97861% 12.88651% 0 25.77302%
}

.cools .row:nth-child(2n) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 6.34516%
}

.cools .row:nth-child(2n) .col--1 {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
    width: 42.89359%
}

.cools .row:nth-child(2n) .col--1 .media {
    width: 55.62164%
}

.cools .row:nth-child(2n) .col--1 .media--1 {
    margin-left: 14.79279%;
    margin-top: -11.24328%;
    margin-bottom: 26.03607%
}

.cools .row:nth-child(2n) .col--1 .media--2 {
    margin-left: 44.37836%
}

.cools .row:nth-child(2n) .col--1 .media--3 {
    margin: 18.34229% 14.79279% 0 14.79279%
}

.cools .row:nth-child(2n) .col--2 {
    width: 49.23875%;
    margin-left: 12.88651%;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1
}

.cools .head {
    height: auto
}

.cools .head h1 {
    margin: 19.53125vw 0 27.34375vw 0;
    display: block
}

@media screen and (max-width: 1024px) {
    .cools .row .col .media .description {
        display: none
    }
}

@media screen and (max-width: 740px) {
    .cools .row {
        display: block !important;
        width: 100%;
        margin-bottom: 0 !important
    }
    .cools .row .col {
        display: block;
        margin-bottom: 0 !important
    }
    .cools .row .col--1,
    .cools .row .col--2 {
        width: 87.30969% !important
    }
    .cools .row .col--2 {
        margin-left: 6.34516%
    }
    .cools .row .col .media {
        margin-top: 0 !important;
        margin-bottom: 11.1678% !important
    }
    .cools .row:nth-child(2n+1) .col--1 .media--1 {
        margin-left: 50.76125%
    }
}

.cool {
    position: relative
}

.cool .scrollable {
    background: #fff
}

.cool .head {
    background: #000;
    height: auto
}

.cool .head h1 {
    margin: 19.53125vw 0 27.34375vw 0;
    display: block
}

.cool .main {
    margin-top: -17.51296%;
    padding-bottom: 1.52251%;
    position: relative
}

.cool .main .nav-black {
    position: absolute;
    top: 0;
    width: 1px;
    height: 1px;
    margin-top: 17.51296%;
    display: block
}

.cool .video {
    width: 74.61937%;
    margin-left: 25.38063%
}

.cool .video .videoplayer {
    position: absolute;
    background: none
}

.cool .video .container,
.cool .video .case .section--video .content-wrapper,
.case .section--video .cool .video .content-wrapper,
.cool .video .case .section--slideshow-videos .content-wrapper,
.case .section--slideshow-videos .cool .video .content-wrapper,
.cool .video .case .section--slideshow-photos .content-wrapper,
.case .section--slideshow-photos .cool .video .content-wrapper {
    width: 100%;
    margin: 0
}

.cool .video .content-wrapper {
    display: none
}

.cool .section {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 1.52251%
}

.cool .section .media {
    position: relative
}

.cool .section .media img {
    width: 100%;
    top: 0;
    left: 0;
    position: absolute
}

.cool .section .description {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 49.23875%;
    font-weight: bold
}

.cool .section .description .p {
    margin: auto 0;
    font-size: 40px;
    font-size: 3.125vw;
    margin-left: 9.79442%;
    width: 80.41117%
}

.cool .section>.media {
    width: 49.23875%
}

.cool .section .wrapper {
    width: 49.23875%;
    font-size: 0
}

.cool .section .wrapper .media {
    width: 48.45395%;
    display: inline-block
}

.cool .section .wrapper .media:nth-child(2n) {
    margin-left: 3.04502%
}

.cool .section .wrapper .media:nth-child(1),
.cool .section .wrapper .media:nth-child(2) {
    margin-bottom: 3.04502%
}

.impressum .scrollable {
    background: #fff
}

.impressum .head {
    height: 0;
    padding-bottom: 30.85%;
    background: #000;
    display: block
}

.impressum .head h1 {
    display: block;
    font-size: 45px;
    font-size: 3.51562vw;
    line-height: 55px;
    line-height: 4.29688vw;
    letter-spacing: -2px;
    letter-spacing: -.15625vw;
    margin-left: 12.69031%;
    margin-top: 210px;
    margin-top: 16.40625vw;
    text-align: left
}

.impressum .content {
    max-width: 74.61937%;
    margin: 0 auto
}

.impressum .content .address {
    color: #191919;
    font-weight: bold;
    font-size: 25px;
    font-size: 1.95312vw;
    line-height: 35px;
    line-height: 2.73438vw;
    font-family: "antoni-web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    letter-spacing: -1px;
    letter-spacing: -.07812vw;
    padding-top: 110px;
    padding-top: 8.59375vw;
    margin-bottom: 70px;
    margin-bottom: 5.46875vw
}

.impressum .content .contact-infos,
.impressum .content .datenschutz {
    font-size: 15px;
    font-size: 1.17188vw;
    line-height: 25px;
    line-height: 1.95312vw;
    letter-spacing: -.5px;
    letter-spacing: -.03906vw
}

.impressum .content .contact-infos a:hover,
.impressum .content .datenschutz a:hover {
    text-decoration: underline
}

.impressum .content .contact-infos {
    color: #4a4a4a
}

.impressum .content .contact-infos a {
    color: #4a4a4a
}

.impressum .content h2 {
    color: #191919;
    font-weight: bold;
    font-size: 25px;
    font-size: 1.95312vw;
    line-height: 75px;
    line-height: 5.85938vw;
    font-family: "antoni-web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: -.5px;
    letter-spacing: -.03906vw;
    margin-top: 130px;
    margin-top: 10.15625vw;
    margin-bottom: 60px;
    margin-bottom: 4.6875vw
}

.impressum .content .datenschutz {
    color: #000;
    padding-bottom: 265px;
    padding-bottom: 20.70312vw
}

.impressum .content .datenschutz p {
    margin-bottom: 25px;
    margin-bottom: 1.95312vw
}

.impressum .content .datenschutz strong {
    display: block;
    padding-top: 30px;
    padding-top: 2.34375vw
}

.impressum .content .datenschutz a {
    color: #000
}

@media screen and (max-width: 740px) {
    .impressum .head {
        padding-bottom: 50%
    }
    .impressum .head h1 {
        font-size: 45px;
        font-size: 6.08108vw;
        line-height: 55px;
        line-height: 7.43243vw;
        letter-spacing: -2px;
        letter-spacing: -.27027vw;
        margin-left: 6.34516%;
        margin-top: 180px;
        margin-top: 24.32432vw
    }
    .impressum .content {
        max-width: 87.30969%
    }
    .impressum .content .address {
        font-size: 30px;
        font-size: 4.05405vw;
        line-height: 45px;
        line-height: 6.08108vw;
        letter-spacing: -1px;
        letter-spacing: -.13514vw;
        padding-top: 110px;
        padding-top: 14.86486vw;
        margin-bottom: 70px;
        margin-bottom: 9.45946vw
    }
    .impressum .content .contact-infos,
    .impressum .content .datenschutz {
        font-size: 24px;
        font-size: 3.24324vw;
        line-height: 40px;
        line-height: 5.40541vw;
        letter-spacing: -.5px;
        letter-spacing: -.06757vw
    }
    .impressum .content h2 {
        font-size: 30px;
        font-size: 4.05405vw;
        line-height: 80px;
        line-height: 10.81081vw;
        letter-spacing: -.5px;
        letter-spacing: -.06757vw;
        margin-top: 130px;
        margin-top: 17.56757vw;
        margin-bottom: 60px;
        margin-bottom: 8.10811vw
    }
    .impressum .content .datenschutz {
        padding-bottom: 265px;
        padding-bottom: 35.81081vw
    }
    .impressum .content .datenschutz p {
        margin-bottom: 25px;
        margin-bottom: 3.37838vw
    }
    .impressum .content .datenschutz strong {
        padding-top: 30px;
        padding-top: 4.05405vw
    }
}

.not-found {
    position: fixed;
    height: 100%;
    width: 100%;
    background: #000;
    color: #fff
}

.not-found .container,
.not-found .case .section--video .content-wrapper,
.case .section--video .not-found .content-wrapper,
.not-found .case .section--slideshow-videos .content-wrapper,
.case .section--slideshow-videos .not-found .content-wrapper,
.not-found .case .section--slideshow-photos .content-wrapper,
.case .section--slideshow-photos .not-found .content-wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%
}

.not-found .container .h1,
.not-found .case .section--video .content-wrapper .h1,
.case .section--video .not-found .content-wrapper .h1,
.not-found .case .section--slideshow-videos .content-wrapper .h1,
.case .section--slideshow-videos .not-found .content-wrapper .h1,
.not-found .case .section--slideshow-photos .content-wrapper .h1,
.case .section--slideshow-photos .not-found .content-wrapper .h1,
.not-found .container .p,
.not-found .case .section--video .content-wrapper .p,
.case .section--video .not-found .content-wrapper .p,
.not-found .case .section--slideshow-videos .content-wrapper .p,
.case .section--slideshow-videos .not-found .content-wrapper .p,
.not-found .case .section--slideshow-photos .content-wrapper .p,
.case .section--slideshow-photos .not-found .content-wrapper .p {
    line-height: 1
}

.not-found .container .p,
.not-found .case .section--video .content-wrapper .p,
.case .section--video .not-found .content-wrapper .p,
.not-found .case .section--slideshow-videos .content-wrapper .p,
.case .section--slideshow-videos .not-found .content-wrapper .p,
.not-found .case .section--slideshow-photos .content-wrapper .p,
.case .section--slideshow-photos .not-found .content-wrapper .p {
    margin-top: 5px
}
