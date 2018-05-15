# html
 <script type="text/javascript" src='./fabric.min.js'></script>
    操作说明：【点击】下方的图片可以添加小图到画布中，【双击】画布内的小图可以删除已经添加的小图<br>
    图片要求：大图是1000 * 500像素， 小图是400 * 400 像素<br>
    如果不需要下载功能就删除到scriptjs里的saveImg内部最后的内容<br>
    <canvas id="canvas" width='1000' height='500'></canvas>  
    <input type='button' onclick="saveImg()" value='生成图像'/><br>
    添加的小图数量：<input type='text' id='imgCount' value='0'/><br>
    小图列表自行循环：<br>
    <table>
      <tr>
        <td><img width="200" height="200" src="./img/1.png" id="img1" onclick="addImg('img1')" /></td>
        <td><img width="200" height="200" src="./img/2.png" id="img2" onclick="addImg('img2')" /></td>
        <td><img width="200" height="200" src="./img/3.png" id="img3" onclick="addImg('img3')" /></td>
        <td><img width="200" height="200" src="./img/4.png" id="img4" onclick="addImg('img4')" /></td>
        <td><img width="200" height="200" src="./img/5.png" id="img5" onclick="addImg('img5')" /></td>
      </tr>
    </table>
    最终生成图片:<br/><img src="" id='finalImg' />
    <br/>
    最终生成base64码:<br/><textarea id='finalBase64' style="width: 800px; height: 200px"></textarea>
  <script type="text/javascript" src='./script.js'></script>
