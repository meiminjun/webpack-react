/**
 *
 * @authors Meiminjun (251222845@qq.com)
 * @date    2016-07-14 22:24:43
 * @version $Id$
 */

import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';
import ListDemo from './component/ListDemo';

const data = [
    {name:"张文娟",text: "换新设计，内外兼修才够美~~穿出独属于你自己的腔调"},
    {name:"李梅",text: "内衣，情趣，呵呵呵呵呵"},
    {name:"王月月",text: "内在美才是真的美"}
  ];

ReactDOM.render( < ListDemo  data = {data}/ > ,
	document.getElementById('root')
);

