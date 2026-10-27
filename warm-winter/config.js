/* =====================================================================
   九号暖冬计划 —— 配置区（GitHub Pages 版）
   ---------------------------------------------------------------------
   本页只做一件事：把用户分流到两个飞书问卷。
   所有文案都在这里改，改完 push 到 GitHub 即可，不用动 HTML。
   ===================================================================== */

/* 首页顶部导语 */
var HERO = {
  lead: '这个冬天，把骑过的路记下来。',
  sub: '选择你要参与的活动，提交凭证，福利将于 12 月初统一发放。',
  period: '活动周期｜2026 年 11 月 1 日 — 11 月 30 日'
};

/* 两个活动的文案与跳转链接
   url 换成新的问卷链接时，只改这一行 */
var ACTIVITIES = {
  mileage: {
    tag: 'LINE 01',
    name: '里程打卡兑换暖冬商城福利券',
    desc: '11 月内累计里程达 666km，审核通过的前 999 名用户可获得福利',
    url: 'https://segway-ninebot.feishu.cn/share/base/form/shrcnkCcWEC6P8WZApjnfwQXIMf'
  },
  post: {
    tag: 'LINE 02',
    name: '发帖晒出你的冬季用车小妙招',
    desc: '分享冬季用车心得，并留下你的主页，方便我们找到你',
    topic: '带话题 #九号服务伴全程# 和 #九友会#',
    url: 'https://segway-ninebot.feishu.cn/share/base/form/shrcnGEkShIMxCRlSW54i8lJB8c'
  }
};
