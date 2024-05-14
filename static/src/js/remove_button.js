/** @odoo-module */

import { usePos } from "@point_of_sale/app/store/pos_hook";
import { Orderline } from "@point_of_sale/app/generic_components/orderline/orderline";
import { patch } from "@web/core/utils/patch";

patch(Orderline.prototype, {
    setup() {
        this.pos = usePos();
    },
    async _onRemoveClick() {
        const order = this.pos.get_order();
        var product_name = this.props.line.productName
        var lines = order.orderlines
        console.log('1',lines)
        for (let i = 0; i < lines.length; i++) {
            if (product_name == lines[i].full_product_name) {
                order.removeOrderline(lines[i])
            }
        }
    }
});
