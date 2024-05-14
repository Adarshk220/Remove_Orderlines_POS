{
    'name': 'Remove order lines POS',
    'author': 'Adarsh',
    'version': '17.0.1.0.0',
    'summary': 'Remove order lines POS',
    'depends': ['base', 'point_of_sale'],
    'data': [
    ],
    'sequence': -115,
    'application': True,
    'assets': {
        'point_of_sale._assets_pos': [
            'remove_order_lines_pos/static/src/js/remove_button.js',
            'remove_order_lines_pos/static/src/js/clear_cart_button.js',
            'remove_order_lines_pos/static/src/xml/remove_button.xml',
            'remove_order_lines_pos/static/src/xml/clear_cart_button.xml',
        ],
    },
}
