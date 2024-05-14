/** @odoo-module */

import { usePos } from "@point_of_sale/app/store/pos_hook";
import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { Component } from "@odoo/owl";

export class ClearCartButton extends Component {
    static template = "point_of_sale.ClearCartButton";

    setup() {
        this.pos = usePos();
    }

    _onClearCartClick() {
          const order = this.pos.get_order();
          var lines = order.orderlines;

          for (let i = 0; i < lines.length;){
              console.log('jiijij',lines[i])
              order.removeOrderline(lines[i]);
          }
    }
}

ProductScreen.addControlButton({
    component: ClearCartButton,
    condition: function () {
        return true;
    },
});
