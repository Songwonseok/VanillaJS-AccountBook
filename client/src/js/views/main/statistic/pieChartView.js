import {color} from '@utils/common'

export default class PieChart {
    constructor(){}

    drawChart = (data) => {
        let start = -90;
        for (let i = 1; i <= data.list.length; i++) {
            if (data.list.length === 1) return;
            const size = (data.list[i - 1].price / data.total) * 360;
            const end = (start + size)
            if (i == data.list.length) end = 270
            document.getElementById(`arc${i}`).setAttribute("d", this.toPieChartItemPath(300, 180, 0, 120, start, end));
            start = end;
        }
    }

    render = (data) => {
        let inner = `<div class="pieChart">
                        <svg id="svg" width="600" height="300">`

        for (let i = 1; i <= data.list.length; i++) {
            if (data.list.length == 1) {

                inner += `<circle id="arc${i}" fill="${color[i - 1]}" cx = "300" cy = "180" r = "120"></circle>
                        <text x="460" y="${(22 * i) + 30}" fill="black">${data.list[i - 1].name} </text>
                        <text x="540" y="${(22 * i) + 30}" fill="${color[i - 1]}">${Math.round((data.list[i - 1].price / data.total) * 100)}%</text>`
            } else {
                inner += `<path id="arc${i}" fill="${color[i - 1]}"></path>
                        <text x="460" y="${(22 * i) + 30}" fill="black">${data.list[i - 1].name} </text>
                        <text x="540" y="${(22 * i) + 30}" fill="${color[i - 1]}"> ${Math.round((data.list[i - 1].price / data.total) * 100)}%</text>`
            }
        }
        inner += `</svg> </div>`
        return inner
    }

    _toXY = (cX, cY, r, degrees) => {
        const rad = (degrees) * Math.PI / 180.0;
        return {
            x: cX + (r * Math.cos(rad)),
            y: cY + (r * Math.sin(rad))
        };
    }

    toPieChartItemPath = (x, y, radiusIn, radiusOut, startAngle, endAngle) => {
        const startIn = this._toXY(x, y, radiusIn, endAngle);
        const endIn = this._toXY(x, y, radiusIn, startAngle);
        const startOut = this._toXY(x, y, radiusOut, endAngle);
        const endOut = this._toXY(x, y, radiusOut, startAngle);
        const arcSweep = (endAngle - startAngle) <= 180 ? "0" : "1";
        const option = [
            "M", startIn.x, startIn.y,
            "L", startOut.x, startOut.y,
            "A", radiusOut, radiusOut, 0, arcSweep, 0, endOut.x, endOut.y,
            "L", endIn.x, endIn.y,
            "A", radiusIn, radiusIn, 0, arcSweep, 1, startIn.x, startIn.y,
            "z"
        ].join(" ");
        return option;
    }

    
}