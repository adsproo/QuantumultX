/**************************************
@Name：纯甄粉爱俱乐部 连续签到 10天送腾讯视频会员月卡*1，20天送腾讯视频会员季卡*1
@Author：Sliverkiss
@Date：2023-10-14 22:20:11

活动时间：2023.10.14-2023.11.30 

脚本兼容：Surge、QuantumultX、Loon、Shadowrocket、Node.js
只测试过QuantumultX、loon和青龙，其它环境请自行尝试

青龙：
1.抓包ucode-openapi.aax6.cn域名下的Authorization，填写到czfajlb_data,多账号用@分割

Surge、QuantumultX、Loon、Shadowrocket：
单账号：
1.将签到脚本拉取到本地
2.打开网站，随便逛逛，提示获取cookie成功则可以使用该脚本
3.关闭获取cookie脚本，防止产生不必要的mitm
多账号：
1.抓包ucode-openapi.aax6.cn域名下的Authorization
2.打开boxjs->我的->数据查看器->在数据键输入czfajlb_data,点击VIEW->在数据内容输入抓取到的Authorization，点击保存。
3.若有多账号，用@分割，如Authorization@Authorization

------------------------------------------
Loon
------------------------------------------
[Script]
cron "1 0 * * *" script-path=czfajlb.js, timeout=300, tag=纯甄粉爱俱乐部签到
^https:\/\/ucode-openapi\.aax6\.cn\/mnzz\/quanyu\/memberPoint script-path=czfajlb.js, timeout=10, tag=纯甄粉爱俱乐部获取token

[MITM]
hostname =ucode-openapi.aax6.cn

------------------------------------------
QuantumultX
------------------------------------------
[rewrite_local]
^https:\/\/ucode-openapi\.aax6\.cn\/mnzz\/quanyu\/memberPoint url script-request-header czfajlb.js

[task_local]
1 0 * * * czfajlb.js, tag=纯甄粉爱俱乐部签到, enabled=true

[mitm]
hostname = ucode-openapi.aax6.cn
====================================
⚠️【免责声明】
------------------------------------------
1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。
******************************************/

// env.js 全局
const _0x4a4c2c=_0x429c;(function(_0x3b0aa6,_0x2110cf){const _0x43200c=_0x429c,_0xaa2b5e=_0x3b0aa6();while(!![]){try{const _0x1ecf9c=parseInt(_0x43200c(0x22c))/0x1+parseInt(_0x43200c(0x1d3))/0x2+parseInt(_0x43200c(0x219))/0x3*(-parseInt(_0x43200c(0x1fc))/0x4)+-parseInt(_0x43200c(0x21d))/0x5+parseInt(_0x43200c(0x1dc))/0x6*(parseInt(_0x43200c(0x21a))/0x7)+-parseInt(_0x43200c(0x1d7))/0x8+parseInt(_0x43200c(0x223))/0x9;if(_0x1ecf9c===_0x2110cf)break;else _0xaa2b5e['push'](_0xaa2b5e['shift']());}catch(_0x2e9ffa){_0xaa2b5e['push'](_0xaa2b5e['shift']());}}}(_0x15cd,0x71f75));const $=new Env(_0x4a4c2c(0x22d)),ckName=_0x4a4c2c(0x243),Notify=0x1,notify=$[_0x4a4c2c(0x1da)]()?require(_0x4a4c2c(0x24d)):'';let envSplitor=['@'],userCookie=($['isNode']()?process[_0x4a4c2c(0x1b0)][ckName]:$[_0x4a4c2c(0x1bd)](ckName))||'',userList=[],userIdx=0x0,userCount=0x0;$[_0x4a4c2c(0x238)]=[],$[_0x4a4c2c(0x244)]=($[_0x4a4c2c(0x1da)]()?process[_0x4a4c2c(0x1b0)][_0x4a4c2c(0x1b7)]:$[_0x4a4c2c(0x1bd)](_0x4a4c2c(0x1b7)))||'';async function main(){const _0x48d179=_0x4a4c2c;console[_0x48d179(0x1f0)](_0x48d179(0x251));let _0x657455=[];for(let _0xb005cf of userList){_0xb005cf[_0x48d179(0x1bf)]?(console[_0x48d179(0x1f0)]('随机延迟'+_0xb005cf[_0x48d179(0x1f8)]()+'ms'),_0x657455['push'](await _0xb005cf[_0x48d179(0x236)]()),await $[_0x48d179(0x22b)](_0xb005cf[_0x48d179(0x1f8)]())):$[_0x48d179(0x238)][_0x48d179(0x1c7)](_0x48d179(0x1d9)+_0xb005cf['index']+'\x20>>\x20Check\x20ck\x20error!');}}class UserInfo{constructor(_0x15dccd){const _0x44c2f8=_0x4a4c2c;this[_0x44c2f8(0x1c4)]=++userIdx,this['token']=_0x15dccd,this[_0x44c2f8(0x1bf)]=!![],this[_0x44c2f8(0x249)]=!![];}[_0x4a4c2c(0x1f8)](){return randomInt(0x3e8,0xbb8);}async['signin'](){const _0x2e218f=_0x4a4c2c;try{const _0x14ec6f={'url':_0x2e218f(0x228),'headers':{'Content-Type':'application/json','User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_8\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MicroMessenger/8.0.42(0x18002a2a)\x20NetType/WIFI\x20Language/zh_CNMozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_8\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MicroMessenger/8.0.42(0x18002a2a)\x20NetType/WIFI\x20Language/zh_CN','Authorization':this[_0x2e218f(0x1e6)],'serialId':''},'body':'{\x22promotionId\x22\x20:\x201001681,\x22promotionCode\x22\x20:\x20\x22CRM-QD\x22,\x22pointRecordRemark\x22\x20:\x20\x22连续签到\x22}'};let _0x38b8c6=await httpRequest(_0x14ec6f);console[_0x2e218f(0x1f0)](_0x38b8c6),!_0x38b8c6?.[_0x2e218f(0x1f9)]?DoubleLog(_0x2e218f(0x23f)):DoubleLog('❌签到失败!'+_0x38b8c6?.[_0x2e218f(0x21e)]);}catch(_0x228f47){console[_0x2e218f(0x1f0)](_0x228f47);}}}async function getCookie(){const _0x2d3f09=_0x4a4c2c;if($request&&$request[_0x2d3f09(0x235)]!=_0x2d3f09(0x23c)){const _0x254cf4=$request[_0x2d3f09(0x1f2)][_0x2d3f09(0x1e5)]||$request['headers'][_0x2d3f09(0x23b)];_0x254cf4?($['setdata'](_0x254cf4,ckName),$[_0x2d3f09(0x230)]($[_0x2d3f09(0x1a5)],'',_0x2d3f09(0x1b9))):$['msg']($[_0x2d3f09(0x1a5)],'',_0x2d3f09(0x220));}}!(async()=>{const _0x51ff37=_0x4a4c2c;if(typeof $request!='undefined'){await getCookie();return;}if(!await checkEnv())throw new Error(_0x51ff37(0x233));;userList['length']>0x0&&await main();$[_0x51ff37(0x244)]&&await BarkNotify($,$['barkKey'],$[_0x51ff37(0x1a5)],$[_0x51ff37(0x238)][_0x51ff37(0x1ae)]('\x0a'));;})()[_0x4a4c2c(0x1ee)](_0x4b060d=>$[_0x4a4c2c(0x238)]['push'](_0x4b060d[_0x4a4c2c(0x1ba)]||_0x4b060d))[_0x4a4c2c(0x21b)](async()=>{const _0x38386d=_0x4a4c2c;await SendMsg($[_0x38386d(0x238)]['join']('\x0a')),$[_0x38386d(0x221)]();});function DoubleLog(_0xc5c55f){const _0x57b93f=_0x4a4c2c;$[_0x57b93f(0x1da)]()?_0xc5c55f&&(console[_0x57b93f(0x1f0)](''+_0xc5c55f),$['notifyMsg'][_0x57b93f(0x1c7)](''+_0xc5c55f)):(console[_0x57b93f(0x1f0)](''+_0xc5c55f),$[_0x57b93f(0x238)][_0x57b93f(0x1c7)](''+_0xc5c55f));}function toParams(_0x205824){const _0x1a809c=_0x4a4c2c;var _0x493fb1=Object[_0x1a809c(0x21c)](_0x205824)['map'](function(_0x352f07){return encodeURIComponent(_0x352f07)+'='+encodeURIComponent(_0x205824[_0x352f07]);})['join']('&');return _0x493fb1;}async function checkEnv(){const _0x2764ef=_0x4a4c2c;if(userCookie){let _0x265487=envSplitor[0x0];for(let _0x34c834 of envSplitor)if(userCookie['indexOf'](_0x34c834)>-0x1){_0x265487=_0x34c834;break;}for(let _0x2fd59e of userCookie[_0x2764ef(0x20e)](_0x265487))_0x2fd59e&&userList['push'](new UserInfo(_0x2fd59e));userCount=userList['length'];}else{console[_0x2764ef(0x1f0)]('未找到CK');return;}return console[_0x2764ef(0x1f0)]('共找到'+userCount+'个账号'),!![];}function randomInt(_0x12006f,_0x49e887){const _0x59b9e8=_0x4a4c2c;return Math[_0x59b9e8(0x24a)](Math[_0x59b9e8(0x1db)]()*(_0x49e887-_0x12006f)+_0x12006f);}function _0x429c(_0x37444b,_0x1b14a4){const _0x15cdb8=_0x15cd();return _0x429c=function(_0x429cd6,_0x205c0f){_0x429cd6=_0x429cd6-0x1a5;let _0x119cc6=_0x15cdb8[_0x429cd6];return _0x119cc6;},_0x429c(_0x37444b,_0x1b14a4);}async function SendMsg(_0x23aded){const _0x3fa7b4=_0x4a4c2c;if(!_0x23aded)return;Notify>0x0?$[_0x3fa7b4(0x1da)]()?await notify[_0x3fa7b4(0x207)]($[_0x3fa7b4(0x1a5)],_0x23aded):$['msg']($[_0x3fa7b4(0x1a5)],'',_0x23aded):console[_0x3fa7b4(0x1f0)](_0x23aded);}function _0x15cd(){const _0x203630=['getMonth','UndefinedError','请求api返回数据为空，请检查自身原因','openUrl','initGotEnv','Cookie','statusCode','readFileSync','Authorization','token','utf-8','lodash_set','setCookieSync','ckjar','✅Push\x20success!','write','isMute','catch','isShadowrocket','log','cwd','headers','assign','/v1/scripting/evaluate','==============📣系统通知📣==============','queryStr','null','getRandomTime','ecode','Loon','media-url','3642788jXcVxV','Stash','Content-Type','got','logs','isSurge','rawBody','🔷Bark\x20notify\x20>>\x20Start\x20push\x20(','请求失败','update-pasteboard','timeout','sendNotify','runScript','POST','decode','Shadowrocket','box.dat','time','split','exec','body','get','getMinutes','.$1','isQuanX','trim','stack','data','cron','3JGPjRR','35028jESlQI','finally','keys','1970670hbyDZm','emsg','error','错误获取签到Cookie失败','done','send','11016216rQKyeR','replace','cktough','path','Surge','https://ucode-openapi.aax6.cn/lottery/checkIn','mediaUrl','opts','wait','687538QWmVDF','纯甄粉爱俱乐部','iconv-lite','open-url','msg','getjson','read','❌未检测到ck，请添加环境变量','loaddata','method','signin','length','notifyMsg','exit','set-cookie','authorization','OPTIONS','reduce','parse','✅签到成功！','existsSync','url','@chavy_boxjs_userCfgs.httpapi_timeout','czfajlb_data','barkKey','substr','toLocaleLowerCase','application/x-www-form-urlencoded','writedata','drawStatus','round','encoding','stringify','./sendNotify','then','test','GET','\x0a==================\x20任务\x20==================\x0a','name','undefined','slice','surge-version','valueForKey','writeFileSync','getFullYear','getEnv','call','join','object','env','isStash','redirect','floor','getval','cookieJar','@chavy_boxjs_userCfgs.httpapi','bark_key','updatePasteboard','获取签到Cookie成功🎉','message','resolve','status','getdata',',\x20错误!','ckStatus','logErr','post','isMuteLog','setval','index','isNeedRewrite','string','push','Node.js','stash-version','content-type','logSeparator','getHours','startTime','Content-Length','setValueForKey','http://','setdata','toStr','1262692ZwFAuK','dataFile','substring','Quantumult\x20X','7130944HpNimi','params','❌账号','isNode','random','144Mgghnr'];_0x15cd=function(){return _0x203630;};return _0x15cd();}function httpRequest(_0x1ea187,_0x587797){const _0x5d27d1=_0x4a4c2c;return typeof _0x587797===_0x5d27d1(0x1a6)?'body'in _0x1ea187?_0x587797='post':_0x587797='get':_0x587797=_0x587797,new Promise(_0x8ec91c=>{$[_0x587797](_0x1ea187,(_0x258ba0,_0x3957fd,_0x47f8e3)=>{const _0x43f5af=_0x429c;try{_0x258ba0?(console[_0x43f5af(0x1f0)](_0x587797+_0x43f5af(0x204)),$[_0x43f5af(0x1c0)](_0x258ba0)):_0x47f8e3?(typeof JSON['parse'](_0x47f8e3)=='object'?_0x47f8e3=JSON[_0x43f5af(0x23e)](_0x47f8e3):_0x47f8e3=_0x47f8e3,_0x8ec91c(_0x47f8e3)):console['log'](_0x43f5af(0x1df));}catch(_0x4dd811){$[_0x43f5af(0x1c0)](_0x4dd811,_0x3957fd);}finally{_0x8ec91c();}});});}async function BarkNotify(_0x53acd6,_0x30239d,_0x3a36fa,_0x24a3bf){const _0x1067a3=_0x4a4c2c;for(let _0x2fd6e0=0x0;_0x2fd6e0<0x3;_0x2fd6e0++){console[_0x1067a3(0x1f0)](_0x1067a3(0x203)+(_0x2fd6e0+0x1)+')');const _0x348b21=await new Promise(_0x1d5b78=>{const _0x2c1dc8=_0x1067a3;_0x53acd6['post']({'url':'https://api.day.app/push','headers':{'Content-Type':'application/json'},'body':JSON[_0x2c1dc8(0x24c)]({'title':_0x3a36fa,'body':_0x24a3bf,'device_key':_0x30239d,'ext_params':{'group':_0x3a36fa}})},(_0x350d2b,_0x4d6f4a,_0x75a2f3)=>_0x4d6f4a&&_0x4d6f4a[_0x2c1dc8(0x1bc)]==0xc8?_0x1d5b78(0x1):_0x1d5b78(_0x75a2f3||_0x350d2b));});if(_0x348b21===0x1){console['log'](_0x1067a3(0x1eb));break;}else console[_0x1067a3(0x1f0)]('❌Push\x20failed!\x20>>\x20'+(_0x348b21['message']||_0x348b21));}};function Env(_0xfbee2c,_0x486bcb){const _0x2fb74c=_0x4a4c2c;class _0x2940c4{constructor(_0x49c3f0){this['env']=_0x49c3f0;}[_0x2fb74c(0x222)](_0x193017,_0x3f150b=_0x2fb74c(0x250)){const _0xd644c3=_0x2fb74c;_0x193017=_0xd644c3(0x1c6)==typeof _0x193017?{'url':_0x193017}:_0x193017;let _0x2d8751=this['get'];return _0xd644c3(0x209)===_0x3f150b&&(_0x2d8751=this['post']),new Promise((_0x560626,_0x56d57f)=>{_0x2d8751['call'](this,_0x193017,(_0x3ad65a,_0x3621af,_0x4d16eb)=>{_0x3ad65a?_0x56d57f(_0x3ad65a):_0x560626(_0x3621af);});});}[_0x2fb74c(0x211)](_0x2332cc){const _0x3960ae=_0x2fb74c;return this[_0x3960ae(0x222)][_0x3960ae(0x1ad)](this[_0x3960ae(0x1b0)],_0x2332cc);}[_0x2fb74c(0x1c1)](_0x4b29a1){const _0x4892f2=_0x2fb74c;return this[_0x4892f2(0x222)][_0x4892f2(0x1ad)](this['env'],_0x4b29a1,_0x4892f2(0x209));}}return new class{constructor(_0x3a996c,_0x321165){const _0x474a8c=_0x2fb74c;this[_0x474a8c(0x1a5)]=_0x3a996c,this['http']=new _0x2940c4(this),this[_0x474a8c(0x217)]=null,this[_0x474a8c(0x1d4)]=_0x474a8c(0x20c),this[_0x474a8c(0x200)]=[],this[_0x474a8c(0x1ed)]=!0x1,this[_0x474a8c(0x1c5)]=!0x1,this[_0x474a8c(0x1cb)]='\x0a',this[_0x474a8c(0x24b)]=_0x474a8c(0x1e7),this[_0x474a8c(0x1cd)]=new Date()['getTime'](),Object['assign'](this,_0x321165),this[_0x474a8c(0x1f0)]('','🔔'+this[_0x474a8c(0x1a5)]+',\x20开始!');}[_0x2fb74c(0x1ac)](){const _0x515c89=_0x2fb74c;return _0x515c89(0x1a6)!=typeof $environment&&$environment[_0x515c89(0x1a8)]?_0x515c89(0x227):_0x515c89(0x1a6)!=typeof $environment&&$environment[_0x515c89(0x1c9)]?_0x515c89(0x1fd):_0x515c89(0x1a6)!=typeof module&&module['exports']?_0x515c89(0x1c8):_0x515c89(0x1a6)!=typeof $task?_0x515c89(0x1d6):_0x515c89(0x1a6)!=typeof $loon?_0x515c89(0x1fa):_0x515c89(0x1a6)!=typeof $rocket?_0x515c89(0x20b):void 0x0;}['isNode'](){const _0xf2010a=_0x2fb74c;return _0xf2010a(0x1c8)===this[_0xf2010a(0x1ac)]();}[_0x2fb74c(0x214)](){const _0xc88813=_0x2fb74c;return'Quantumult\x20X'===this[_0xc88813(0x1ac)]();}[_0x2fb74c(0x201)](){const _0x1e5651=_0x2fb74c;return _0x1e5651(0x227)===this[_0x1e5651(0x1ac)]();}['isLoon'](){const _0x23a3e4=_0x2fb74c;return _0x23a3e4(0x1fa)===this[_0x23a3e4(0x1ac)]();}[_0x2fb74c(0x1ef)](){const _0x239fec=_0x2fb74c;return _0x239fec(0x20b)===this['getEnv']();}[_0x2fb74c(0x1b1)](){const _0x50080a=_0x2fb74c;return _0x50080a(0x1fd)===this[_0x50080a(0x1ac)]();}['toObj'](_0x4e60d4,_0xe0179f=null){try{return JSON['parse'](_0x4e60d4);}catch{return _0xe0179f;}}[_0x2fb74c(0x1d2)](_0x43f586,_0x56eeba=null){const _0x5a7438=_0x2fb74c;try{return JSON[_0x5a7438(0x24c)](_0x43f586);}catch{return _0x56eeba;}}[_0x2fb74c(0x231)](_0x203804,_0x8f8bb){const _0x56f01e=_0x2fb74c;let _0x1ab8e4=_0x8f8bb;const _0xdb70ba=this[_0x56f01e(0x1bd)](_0x203804);if(_0xdb70ba)try{_0x1ab8e4=JSON[_0x56f01e(0x23e)](this[_0x56f01e(0x1bd)](_0x203804));}catch{}return _0x1ab8e4;}['setjson'](_0x2c18c5,_0x38aa47){const _0x8f296f=_0x2fb74c;try{return this['setdata'](JSON[_0x8f296f(0x24c)](_0x2c18c5),_0x38aa47);}catch{return!0x1;}}['getScript'](_0x38db88){return new Promise(_0x6b7330=>{this['get']({'url':_0x38db88},(_0xb832dc,_0x5b4171,_0x283cbe)=>_0x6b7330(_0x283cbe));});}[_0x2fb74c(0x208)](_0x1bd1b8,_0x27c6c7){const _0xab7b4c=_0x2fb74c;return new Promise(_0x3d14de=>{const _0x3c757f=_0x429c;let _0xc9f0f7=this['getdata'](_0x3c757f(0x1b6));_0xc9f0f7=_0xc9f0f7?_0xc9f0f7[_0x3c757f(0x224)](/\n/g,'')[_0x3c757f(0x215)]():_0xc9f0f7;let _0x35f66f=this[_0x3c757f(0x1bd)](_0x3c757f(0x242));_0x35f66f=_0x35f66f?0x1*_0x35f66f:0x14,_0x35f66f=_0x27c6c7&&_0x27c6c7['timeout']?_0x27c6c7[_0x3c757f(0x206)]:_0x35f66f;const [_0x3d63b7,_0x467a44]=_0xc9f0f7[_0x3c757f(0x20e)]('@'),_0xccc2d0={'url':_0x3c757f(0x1d0)+_0x467a44+_0x3c757f(0x1f4),'body':{'script_text':_0x1bd1b8,'mock_type':_0x3c757f(0x218),'timeout':_0x35f66f},'headers':{'X-Key':_0x3d63b7,'Accept':'*/*'},'timeout':_0x35f66f};this[_0x3c757f(0x1c1)](_0xccc2d0,(_0x1a369b,_0x147bef,_0x552407)=>_0x3d14de(_0x552407));})[_0xab7b4c(0x1ee)](_0x575fe8=>this[_0xab7b4c(0x1c0)](_0x575fe8));}[_0x2fb74c(0x234)](){const _0x1569d9=_0x2fb74c;if(!this['isNode']())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x1569d9(0x226)]=this['path']?this[_0x1569d9(0x226)]:require(_0x1569d9(0x226));const _0x22a3f0=this['path'][_0x1569d9(0x1bb)](this['dataFile']),_0x1b42af=this[_0x1569d9(0x226)][_0x1569d9(0x1bb)](process['cwd'](),this['dataFile']),_0x4488b8=this['fs']['existsSync'](_0x22a3f0),_0x43d880=!_0x4488b8&&this['fs'][_0x1569d9(0x240)](_0x1b42af);if(!_0x4488b8&&!_0x43d880)return{};{const _0x4f79cb=_0x4488b8?_0x22a3f0:_0x1b42af;try{return JSON[_0x1569d9(0x23e)](this['fs'][_0x1569d9(0x1e4)](_0x4f79cb));}catch(_0x2da98e){return{};}}}}['writedata'](){const _0x3ca032=_0x2fb74c;if(this[_0x3ca032(0x1da)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x3ca032(0x226)]=this[_0x3ca032(0x226)]?this['path']:require(_0x3ca032(0x226));const _0x1635d3=this[_0x3ca032(0x226)]['resolve'](this['dataFile']),_0x13f878=this[_0x3ca032(0x226)][_0x3ca032(0x1bb)](process[_0x3ca032(0x1f1)](),this['dataFile']),_0x17d096=this['fs']['existsSync'](_0x1635d3),_0x528361=!_0x17d096&&this['fs'][_0x3ca032(0x240)](_0x13f878),_0xc8971a=JSON[_0x3ca032(0x24c)](this[_0x3ca032(0x217)]);_0x17d096?this['fs'][_0x3ca032(0x1aa)](_0x1635d3,_0xc8971a):_0x528361?this['fs']['writeFileSync'](_0x13f878,_0xc8971a):this['fs'][_0x3ca032(0x1aa)](_0x1635d3,_0xc8971a);}}['lodash_get'](_0x44bee8,_0x5d6260,_0x228896){const _0x2f54b3=_0x2fb74c,_0x1ebe4c=_0x5d6260['replace'](/\[(\d+)\]/g,_0x2f54b3(0x213))['split']('.');let _0x2fab52=_0x44bee8;for(const _0x4cf871 of _0x1ebe4c)if(_0x2fab52=Object(_0x2fab52)[_0x4cf871],void 0x0===_0x2fab52)return _0x228896;return _0x2fab52;}[_0x2fb74c(0x1e8)](_0x50fbaf,_0x4daee4,_0x43619f){const _0x255daf=_0x2fb74c;return Object(_0x50fbaf)!==_0x50fbaf?_0x50fbaf:(Array['isArray'](_0x4daee4)||(_0x4daee4=_0x4daee4['toString']()['match'](/[^.[\]]+/g)||[]),_0x4daee4[_0x255daf(0x1a7)](0x0,-0x1)[_0x255daf(0x23d)]((_0x5cb12e,_0x1367cb,_0x58ae00)=>Object(_0x5cb12e[_0x1367cb])===_0x5cb12e[_0x1367cb]?_0x5cb12e[_0x1367cb]:_0x5cb12e[_0x1367cb]=Math['abs'](_0x4daee4[_0x58ae00+0x1])>>0x0==+_0x4daee4[_0x58ae00+0x1]?[]:{},_0x50fbaf)[_0x4daee4[_0x4daee4[_0x255daf(0x237)]-0x1]]=_0x43619f,_0x50fbaf);}[_0x2fb74c(0x1bd)](_0x353de4){const _0x40562f=_0x2fb74c;let _0x2a4d95=this[_0x40562f(0x1b4)](_0x353de4);if(/^@/['test'](_0x353de4)){const [,_0x16b1b4,_0x51e51a]=/^@(.*?)\.(.*?)$/[_0x40562f(0x20f)](_0x353de4),_0x573420=_0x16b1b4?this[_0x40562f(0x1b4)](_0x16b1b4):'';if(_0x573420)try{const _0x4da1b6=JSON[_0x40562f(0x23e)](_0x573420);_0x2a4d95=_0x4da1b6?this['lodash_get'](_0x4da1b6,_0x51e51a,''):_0x2a4d95;}catch(_0x4d5384){_0x2a4d95='';}}return _0x2a4d95;}[_0x2fb74c(0x1d1)](_0x5e6bfe,_0x2f78e1){const _0x5b73ca=_0x2fb74c;let _0x48a113=!0x1;if(/^@/[_0x5b73ca(0x24f)](_0x2f78e1)){const [,_0x42b401,_0x3322a7]=/^@(.*?)\.(.*?)$/[_0x5b73ca(0x20f)](_0x2f78e1),_0x6f5313=this[_0x5b73ca(0x1b4)](_0x42b401),_0x3589e2=_0x42b401?_0x5b73ca(0x1f7)===_0x6f5313?null:_0x6f5313||'{}':'{}';try{const _0x202cca=JSON[_0x5b73ca(0x23e)](_0x3589e2);this[_0x5b73ca(0x1e8)](_0x202cca,_0x3322a7,_0x5e6bfe),_0x48a113=this[_0x5b73ca(0x1c3)](JSON[_0x5b73ca(0x24c)](_0x202cca),_0x42b401);}catch(_0x5489ac){const _0x1a2389={};this[_0x5b73ca(0x1e8)](_0x1a2389,_0x3322a7,_0x5e6bfe),_0x48a113=this[_0x5b73ca(0x1c3)](JSON[_0x5b73ca(0x24c)](_0x1a2389),_0x42b401);}}else _0x48a113=this['setval'](_0x5e6bfe,_0x2f78e1);return _0x48a113;}[_0x2fb74c(0x1b4)](_0x47de34){const _0x243fd2=_0x2fb74c;switch(this[_0x243fd2(0x1ac)]()){case _0x243fd2(0x227):case'Loon':case _0x243fd2(0x1fd):case _0x243fd2(0x20b):return $persistentStore[_0x243fd2(0x232)](_0x47de34);case _0x243fd2(0x1d6):return $prefs[_0x243fd2(0x1a9)](_0x47de34);case _0x243fd2(0x1c8):return this[_0x243fd2(0x217)]=this[_0x243fd2(0x234)](),this['data'][_0x47de34];default:return this[_0x243fd2(0x217)]&&this['data'][_0x47de34]||null;}}['setval'](_0x295898,_0x114a8f){const _0x12bd8=_0x2fb74c;switch(this[_0x12bd8(0x1ac)]()){case _0x12bd8(0x227):case _0x12bd8(0x1fa):case _0x12bd8(0x1fd):case'Shadowrocket':return $persistentStore[_0x12bd8(0x1ec)](_0x295898,_0x114a8f);case _0x12bd8(0x1d6):return $prefs[_0x12bd8(0x1cf)](_0x295898,_0x114a8f);case'Node.js':return this['data']=this[_0x12bd8(0x234)](),this[_0x12bd8(0x217)][_0x114a8f]=_0x295898,this[_0x12bd8(0x248)](),!0x0;default:return this[_0x12bd8(0x217)]&&this[_0x12bd8(0x217)][_0x114a8f]||null;}}[_0x2fb74c(0x1e1)](_0x5acce8){const _0x62fcee=_0x2fb74c;this[_0x62fcee(0x1ff)]=this[_0x62fcee(0x1ff)]?this[_0x62fcee(0x1ff)]:require(_0x62fcee(0x1ff)),this[_0x62fcee(0x225)]=this[_0x62fcee(0x225)]?this[_0x62fcee(0x225)]:require('tough-cookie'),this[_0x62fcee(0x1ea)]=this[_0x62fcee(0x1ea)]?this['ckjar']:new this['cktough']['CookieJar'](),_0x5acce8&&(_0x5acce8[_0x62fcee(0x1f2)]=_0x5acce8[_0x62fcee(0x1f2)]?_0x5acce8[_0x62fcee(0x1f2)]:{},void 0x0===_0x5acce8[_0x62fcee(0x1f2)][_0x62fcee(0x1e2)]&&void 0x0===_0x5acce8['cookieJar']&&(_0x5acce8[_0x62fcee(0x1b5)]=this[_0x62fcee(0x1ea)]));}[_0x2fb74c(0x211)](_0x292b1e,_0x418a59=()=>{}){const _0x150861=_0x2fb74c;switch(_0x292b1e[_0x150861(0x1f2)]&&(delete _0x292b1e['headers'][_0x150861(0x1fe)],delete _0x292b1e[_0x150861(0x1f2)]['Content-Length'],delete _0x292b1e[_0x150861(0x1f2)][_0x150861(0x1ca)],delete _0x292b1e[_0x150861(0x1f2)]['content-length']),_0x292b1e[_0x150861(0x1d8)]&&(_0x292b1e[_0x150861(0x241)]+='?'+this[_0x150861(0x1f6)](_0x292b1e['params'])),this[_0x150861(0x1ac)]()){case _0x150861(0x227):case _0x150861(0x1fa):case _0x150861(0x1fd):case _0x150861(0x20b):default:this['isSurge']()&&this['isNeedRewrite']&&(_0x292b1e[_0x150861(0x1f2)]=_0x292b1e['headers']||{},Object[_0x150861(0x1f3)](_0x292b1e[_0x150861(0x1f2)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x150861(0x211)](_0x292b1e,(_0x56d368,_0x376b66,_0x4ecfa3)=>{const _0x43f0c4=_0x150861;!_0x56d368&&_0x376b66&&(_0x376b66[_0x43f0c4(0x210)]=_0x4ecfa3,_0x376b66['statusCode']=_0x376b66[_0x43f0c4(0x1bc)]?_0x376b66['status']:_0x376b66[_0x43f0c4(0x1e3)],_0x376b66[_0x43f0c4(0x1bc)]=_0x376b66['statusCode']),_0x418a59(_0x56d368,_0x376b66,_0x4ecfa3);});break;case _0x150861(0x1d6):this['isNeedRewrite']&&(_0x292b1e[_0x150861(0x22a)]=_0x292b1e[_0x150861(0x22a)]||{},Object[_0x150861(0x1f3)](_0x292b1e[_0x150861(0x22a)],{'hints':!0x1})),$task['fetch'](_0x292b1e)[_0x150861(0x24e)](_0xe79df3=>{const {statusCode:_0x223fbe,statusCode:_0x1203ec,headers:_0x3cd22f,body:_0x32d37d,bodyBytes:_0x4a292b}=_0xe79df3;_0x418a59(null,{'status':_0x223fbe,'statusCode':_0x1203ec,'headers':_0x3cd22f,'body':_0x32d37d,'bodyBytes':_0x4a292b},_0x32d37d,_0x4a292b);},_0x2076c4=>_0x418a59(_0x2076c4&&_0x2076c4[_0x150861(0x21f)]||_0x150861(0x1de)));break;case _0x150861(0x1c8):let _0x47a988=require(_0x150861(0x22e));this[_0x150861(0x1e1)](_0x292b1e),this['got'](_0x292b1e)['on'](_0x150861(0x1b2),(_0x578c91,_0x43d436)=>{const _0x56d3b1=_0x150861;try{if(_0x578c91[_0x56d3b1(0x1f2)][_0x56d3b1(0x23a)]){const _0x236fe0=_0x578c91['headers'][_0x56d3b1(0x23a)]['map'](this[_0x56d3b1(0x225)][_0x56d3b1(0x1e2)]['parse'])['toString']();_0x236fe0&&this[_0x56d3b1(0x1ea)][_0x56d3b1(0x1e9)](_0x236fe0,null),_0x43d436[_0x56d3b1(0x1b5)]=this[_0x56d3b1(0x1ea)];}}catch(_0x157f68){this['logErr'](_0x157f68);}})['then'](_0xc3eee1=>{const _0x4ae15d=_0x150861,{statusCode:_0x2bf0cf,statusCode:_0x21a62e,headers:_0x22cb80,rawBody:_0x4c5886}=_0xc3eee1,_0xdd9319=_0x47a988[_0x4ae15d(0x20a)](_0x4c5886,this[_0x4ae15d(0x24b)]);_0x418a59(null,{'status':_0x2bf0cf,'statusCode':_0x21a62e,'headers':_0x22cb80,'rawBody':_0x4c5886,'body':_0xdd9319},_0xdd9319);},_0x145ae4=>{const _0x5b18a3=_0x150861,{message:_0x3a0534,response:_0x1fad9d}=_0x145ae4;_0x418a59(_0x3a0534,_0x1fad9d,_0x1fad9d&&_0x47a988['decode'](_0x1fad9d[_0x5b18a3(0x202)],this['encoding']));});}}[_0x2fb74c(0x1c1)](_0x2a3bb8,_0x96ef02=()=>{}){const _0x4d125e=_0x2fb74c,_0x530ff6=_0x2a3bb8['method']?_0x2a3bb8[_0x4d125e(0x235)][_0x4d125e(0x246)]():_0x4d125e(0x1c1);switch(_0x2a3bb8[_0x4d125e(0x210)]&&_0x2a3bb8[_0x4d125e(0x1f2)]&&!_0x2a3bb8[_0x4d125e(0x1f2)]['Content-Type']&&!_0x2a3bb8['headers'][_0x4d125e(0x1ca)]&&(_0x2a3bb8[_0x4d125e(0x1f2)][_0x4d125e(0x1ca)]=_0x4d125e(0x247)),_0x2a3bb8[_0x4d125e(0x1f2)]&&(delete _0x2a3bb8['headers'][_0x4d125e(0x1ce)],delete _0x2a3bb8[_0x4d125e(0x1f2)]['content-length']),this['getEnv']()){case _0x4d125e(0x227):case _0x4d125e(0x1fa):case _0x4d125e(0x1fd):case _0x4d125e(0x20b):default:this[_0x4d125e(0x201)]()&&this[_0x4d125e(0x1c5)]&&(_0x2a3bb8[_0x4d125e(0x1f2)]=_0x2a3bb8['headers']||{},Object['assign'](_0x2a3bb8[_0x4d125e(0x1f2)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x530ff6](_0x2a3bb8,(_0x2e1b5f,_0x436768,_0xa466b2)=>{const _0x1414b8=_0x4d125e;!_0x2e1b5f&&_0x436768&&(_0x436768[_0x1414b8(0x210)]=_0xa466b2,_0x436768[_0x1414b8(0x1e3)]=_0x436768['status']?_0x436768[_0x1414b8(0x1bc)]:_0x436768[_0x1414b8(0x1e3)],_0x436768[_0x1414b8(0x1bc)]=_0x436768[_0x1414b8(0x1e3)]),_0x96ef02(_0x2e1b5f,_0x436768,_0xa466b2);});break;case _0x4d125e(0x1d6):_0x2a3bb8[_0x4d125e(0x235)]=_0x530ff6,this[_0x4d125e(0x1c5)]&&(_0x2a3bb8['opts']=_0x2a3bb8[_0x4d125e(0x22a)]||{},Object['assign'](_0x2a3bb8['opts'],{'hints':!0x1})),$task['fetch'](_0x2a3bb8)[_0x4d125e(0x24e)](_0x4d1583=>{const {statusCode:_0x2200c3,statusCode:_0x1c5528,headers:_0xc4db0,body:_0x440b8c,bodyBytes:_0x2d2114}=_0x4d1583;_0x96ef02(null,{'status':_0x2200c3,'statusCode':_0x1c5528,'headers':_0xc4db0,'body':_0x440b8c,'bodyBytes':_0x2d2114},_0x440b8c,_0x2d2114);},_0x38c356=>_0x96ef02(_0x38c356&&_0x38c356[_0x4d125e(0x21f)]||_0x4d125e(0x1de)));break;case'Node.js':let _0x1f741b=require(_0x4d125e(0x22e));this[_0x4d125e(0x1e1)](_0x2a3bb8);const {url:_0xf25d5,..._0x4e12f0}=_0x2a3bb8;this[_0x4d125e(0x1ff)][_0x530ff6](_0xf25d5,_0x4e12f0)['then'](_0x1707fe=>{const _0x201469=_0x4d125e,{statusCode:_0x3ea008,statusCode:_0x508e6b,headers:_0x3ec044,rawBody:_0x47bec9}=_0x1707fe,_0x1ea6d7=_0x1f741b[_0x201469(0x20a)](_0x47bec9,this[_0x201469(0x24b)]);_0x96ef02(null,{'status':_0x3ea008,'statusCode':_0x508e6b,'headers':_0x3ec044,'rawBody':_0x47bec9,'body':_0x1ea6d7},_0x1ea6d7);},_0x47adcd=>{const _0x43a31b=_0x4d125e,{message:_0xa02c07,response:_0x104948}=_0x47adcd;_0x96ef02(_0xa02c07,_0x104948,_0x104948&&_0x1f741b[_0x43a31b(0x20a)](_0x104948['rawBody'],this[_0x43a31b(0x24b)]));});}}[_0x2fb74c(0x20d)](_0x597be5,_0x4862d1=null){const _0x152395=_0x2fb74c,_0x344755=_0x4862d1?new Date(_0x4862d1):new Date();let _0x2fc168={'M+':_0x344755[_0x152395(0x1dd)]()+0x1,'d+':_0x344755['getDate'](),'H+':_0x344755[_0x152395(0x1cc)](),'m+':_0x344755[_0x152395(0x212)](),'s+':_0x344755['getSeconds'](),'q+':Math[_0x152395(0x1b3)]((_0x344755[_0x152395(0x1dd)]()+0x3)/0x3),'S':_0x344755['getMilliseconds']()};/(y+)/[_0x152395(0x24f)](_0x597be5)&&(_0x597be5=_0x597be5[_0x152395(0x224)](RegExp['$1'],(_0x344755[_0x152395(0x1ab)]()+'')[_0x152395(0x245)](0x4-RegExp['$1'][_0x152395(0x237)])));for(let _0x2c185b in _0x2fc168)new RegExp('('+_0x2c185b+')')[_0x152395(0x24f)](_0x597be5)&&(_0x597be5=_0x597be5[_0x152395(0x224)](RegExp['$1'],0x1==RegExp['$1']['length']?_0x2fc168[_0x2c185b]:('00'+_0x2fc168[_0x2c185b])[_0x152395(0x245)]((''+_0x2fc168[_0x2c185b])['length'])));return _0x597be5;}['queryStr'](_0x2dbcaa){const _0x1da03c=_0x2fb74c;let _0x3c3847='';for(const _0x38ec47 in _0x2dbcaa){let _0x23936a=_0x2dbcaa[_0x38ec47];null!=_0x23936a&&''!==_0x23936a&&(_0x1da03c(0x1af)==typeof _0x23936a&&(_0x23936a=JSON[_0x1da03c(0x24c)](_0x23936a)),_0x3c3847+=_0x38ec47+'='+_0x23936a+'&');}return _0x3c3847=_0x3c3847[_0x1da03c(0x1d5)](0x0,_0x3c3847['length']-0x1),_0x3c3847;}[_0x2fb74c(0x230)](_0x1aa1a8=_0xfbee2c,_0x373f6f='',_0x1942f0='',_0x46c5b4){const _0x134939=_0x2fb74c,_0x41e16b=_0x253ea2=>{const _0x2a1e4a=_0x429c;switch(typeof _0x253ea2){case void 0x0:return _0x253ea2;case _0x2a1e4a(0x1c6):switch(this['getEnv']()){case _0x2a1e4a(0x227):case _0x2a1e4a(0x1fd):default:return{'url':_0x253ea2};case _0x2a1e4a(0x1fa):case'Shadowrocket':return _0x253ea2;case _0x2a1e4a(0x1d6):return{'open-url':_0x253ea2};case _0x2a1e4a(0x1c8):return;}case _0x2a1e4a(0x1af):switch(this[_0x2a1e4a(0x1ac)]()){case'Surge':case'Stash':case _0x2a1e4a(0x20b):default:{let _0x28bab8=_0x253ea2['url']||_0x253ea2[_0x2a1e4a(0x1e0)]||_0x253ea2[_0x2a1e4a(0x22f)];return{'url':_0x28bab8};}case'Loon':{let _0x4dbd7a=_0x253ea2[_0x2a1e4a(0x1e0)]||_0x253ea2['url']||_0x253ea2[_0x2a1e4a(0x22f)],_0x1c2df8=_0x253ea2[_0x2a1e4a(0x229)]||_0x253ea2[_0x2a1e4a(0x1fb)];return{'openUrl':_0x4dbd7a,'mediaUrl':_0x1c2df8};}case _0x2a1e4a(0x1d6):{let _0x3946c3=_0x253ea2['open-url']||_0x253ea2[_0x2a1e4a(0x241)]||_0x253ea2[_0x2a1e4a(0x1e0)],_0x558cb6=_0x253ea2[_0x2a1e4a(0x1fb)]||_0x253ea2[_0x2a1e4a(0x229)],_0x6b6a0e=_0x253ea2[_0x2a1e4a(0x205)]||_0x253ea2[_0x2a1e4a(0x1b8)];return{'open-url':_0x3946c3,'media-url':_0x558cb6,'update-pasteboard':_0x6b6a0e};}case _0x2a1e4a(0x1c8):return;}default:return;}};if(!this[_0x134939(0x1ed)])switch(this[_0x134939(0x1ac)]()){case'Surge':case'Loon':case _0x134939(0x1fd):case'Shadowrocket':default:$notification['post'](_0x1aa1a8,_0x373f6f,_0x1942f0,_0x41e16b(_0x46c5b4));break;case _0x134939(0x1d6):$notify(_0x1aa1a8,_0x373f6f,_0x1942f0,_0x41e16b(_0x46c5b4));break;case'Node.js':}if(!this[_0x134939(0x1c2)]){let _0x182217=['',_0x134939(0x1f5)];_0x182217[_0x134939(0x1c7)](_0x1aa1a8),_0x373f6f&&_0x182217[_0x134939(0x1c7)](_0x373f6f),_0x1942f0&&_0x182217[_0x134939(0x1c7)](_0x1942f0),console['log'](_0x182217['join']('\x0a')),this[_0x134939(0x200)]=this[_0x134939(0x200)]['concat'](_0x182217);}}[_0x2fb74c(0x1f0)](..._0x1541e1){const _0x3454f8=_0x2fb74c;_0x1541e1[_0x3454f8(0x237)]>0x0&&(this[_0x3454f8(0x200)]=[...this[_0x3454f8(0x200)],..._0x1541e1]),console[_0x3454f8(0x1f0)](_0x1541e1[_0x3454f8(0x1ae)](this[_0x3454f8(0x1cb)]));}[_0x2fb74c(0x1c0)](_0x51c23f,_0x50ff3b){const _0x411fbf=_0x2fb74c;switch(this[_0x411fbf(0x1ac)]()){case'Surge':case _0x411fbf(0x1fa):case _0x411fbf(0x1fd):case'Shadowrocket':case'Quantumult\x20X':default:this[_0x411fbf(0x1f0)]('','❗️'+this['name']+_0x411fbf(0x1be),_0x51c23f);break;case _0x411fbf(0x1c8):this[_0x411fbf(0x1f0)]('','❗️'+this[_0x411fbf(0x1a5)]+_0x411fbf(0x1be),_0x51c23f[_0x411fbf(0x216)]);}}['wait'](_0x517fde){return new Promise(_0x126c55=>setTimeout(_0x126c55,_0x517fde));}[_0x2fb74c(0x221)](_0x324a46={}){const _0x1de2a0=_0x2fb74c,_0x12c3c9=new Date()['getTime'](),_0xa65405=(_0x12c3c9-this[_0x1de2a0(0x1cd)])/0x3e8;switch(this[_0x1de2a0(0x1f0)]('','🔔'+this[_0x1de2a0(0x1a5)]+',\x20结束!\x20🕛\x20'+_0xa65405+'\x20秒'),this[_0x1de2a0(0x1f0)](),this[_0x1de2a0(0x1ac)]()){case _0x1de2a0(0x227):case _0x1de2a0(0x1fa):case _0x1de2a0(0x1fd):case _0x1de2a0(0x20b):case _0x1de2a0(0x1d6):default:$done(_0x324a46);break;case'Node.js':process[_0x1de2a0(0x239)](0x1);}}}(_0xfbee2c,_0x486bcb);}