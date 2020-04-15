import React, { Component } from 'react';
import './Recipe.css';
import Met from './method';
import Ima from './image';

function Recipe(){
    return(
        <section class="inputrecipe">
            <h1>ลงสูตรอาหาร</h1>
        <ul>
        <button id="but1" onclick="document.getElementsByClassName('input1').value = ''" >รีเซ็ท</button>
        <li>
        <p>ชื่อเมนูอาหาร : </p>
        <input type="text" class="input1" />
        </li>
        <li>
                <p>คำอธิบาย : </p>                
        </li>
        <textarea rows = "5" cols = "70">
        </textarea>
        <li>
                <p>รูปภาพปกเมนูอาหาร</p>
                <input type="file" id="img" name="img" accept="image/*"></input>
        </li>
        <li>
                <p>ราคา : </p>
                <select>
                    <option value="1">น้อยกว่า 100</option>
                    <option value="2">100 - 500</option>
                    <option value="3">มากกว่า 500</option>
                   
                </select> 
                <p>บาท </p>
        </li>
        <li>
                <p>วัตถุดิบ : </p>
                <input type="text" class="input1"/>
        </li>
        <li>
                <p>อุปกรณ์ : </p>
                <input type="text" class="input1"/>
        </li>
        <hr />
        <li>
            <p>ขั้นตอนการทำ</p>
        </li>
        <Met />
        <hr />

        <li>
            <p>ระยะเวลา : </p>
            <input type="text" class="input1"/>
        </li>
        <li>
            <p>ประเภทอาหาร : </p>
            <select>
                <option value="1">คาว</option>
                <option value="2">หวาน</option>
                <option value="3">ทะเล</option>
            </select> 
        </li>
        <li>
                <p>สัญชาติ : </p>
                <input type="text" class="input1"/>
        </li>
        <li>
                <p>แคลโลรี่ : </p>
                <input type="text" class="input1"/>
        </li>
        <button>ยืนยัน</button>


        </ul>
        </section>
       
    );
}

export default Recipe;