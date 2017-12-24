# Custome Grid WebComponent
A simple grid web-component implements CSS3 grid system from behind.

```html
     <c-grid cols-def='5' style="height: 400px;width: 400px">
        <div cols='1 / 2' rows='1 / 2' style="background-color: rgba(255, 0, 0, 0.253);"> div1</div>
        <div cols='2 / 5' rows='2 / 4' style="background-color: rgba(128, 128, 128, 0.267);height:5em;z-index: 1;">div2</div>
        <div cols='1 / 6' rows='2 / 5' style="background-color: rgba(255, 255, 0, 0.384);">div3</div>
        <div cols='2 / 6' rows='1 / 4' style="background-color: rgba(0, 183, 255, 0.384);">
            <c-grid cols-def='2' style="height: 100%;width: 100%">
                <div cols='1' rows='1' style="background-color: red">inner 1</div>
                <div cols='2' rows='2' style="background-color: green">inner 3</div>
                <div cols='3' rows='3' style="background-color: blue">inner 2</div>
            </c-grid>
        </div>
        <div cols='3 / 6' rows='4 / 4' style="background-color: rgba(0, 255, 64, 0.384);">div5</div>
    </c-grid>
    <script src="grid.js"></script>
```
This html should produce

![alt text](https://github.com/ariful19/CustomeGridWebComponent/blob/master/preview.PNG "grid preview")

Just defin a grid with column count in `cols-def='<number>'`
```html
        <c-grid cols-def='5'>
        ...
        </c-grid>
```
Define location of immidiate child using `cols` and `rows` attributes. `cols='1 / 4' rows='1 / 2'` means that it starts from first column and continues untile fourth column. It starts from first row and ends in second row.

We don't need to define rows first. Rows will be added automatically.

