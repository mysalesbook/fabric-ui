import { StyleSheet } from '@react-pdf/renderer';

export const invoiceTable = StyleSheet.create({

    container: {
        padding: 5,
        width: 100
    },

    trRow: {
        display: "flex",
        flexWrap: "wrap",
        width: '100%',
        flexDirection: "row"
    },

    thRow: {
        display: "flex",
        flexWrap: "wrap",
        width: '100%',
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: '#E8F3FD'
    },

    b_bottom: {
        borderBottom: 1,
        borderBottomWidth: 1,
    },

    b_top: {
        borderTopWidth: 1,
        borderTopColor: 'black',
    },

    b_left: {
        borderLeftWidth: 1,
        borderLeftColor: "black",
    },

    b_right: {
        borderRightWidth: 1,
        borderRightColor: "black"
    },

    td_col_0_5: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '4.16665%'
    },

    td_col1: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '8.3333333%'
    },

    td_col2: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '16.66666667%'
    },

    td_col3: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '25%'
    },

    td_col4: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '33.33333333%'
    },

    td_col5: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '41.66666667%'
    },

    td_col6: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '50%'
    },

    td_col7: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '58.33333333%'
    },

    td_col8: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '66.66666667%'
    },

    td_col9: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '75%'
    },

    td_col10: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '83.3333333%'
    },

    td_col11: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '91.6666667%'
    },

    td_col12: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
        width: '100%'
    },

    pl_xs: {
        paddingLeft: 3
    },

    pr_xs: {
        paddingRight: 3
    },

    pb_xs: {
        paddingBottom: 3
    },

    pt_xs: {
        paddingTop: 3
    },

    textCentre: {
        textAlign: "center"
    },

    textLeft: {
        textAlign: "left",
        paddingLeft: 3
    },

    textRight: {
        textAlign: "right"
    },

    rupees: {
        display: "flex",
        flexDirection: "column",
        fontWeight: "bold",
        justifyContent: "center"
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingLeft: 3,
        paddingBottom: 4
    }
});


export const letterHeadStyle = StyleSheet.create({

    reportTitle: {
        color: 'red',
        letterSpacing: 2.7,
        fontSize: 20,
        textTransform: 'uppercase',
        marginBottom: 0,
        textAlign: "center"
    },

    reportSubTitle: {
        color: 'black',
        fontSize: 11,
        fontWeight: '400',
        marginTop: 0,
        textAlign: "center",
        paddingLeft: 2,
    },

    invoiceHeaderColumn: {
        width: '50%',
        marginTop: 10,
        fontSize: 12,
    },

    tableRow: {
        margin: "auto",
        flexDirection: "row",
        marginTop: 0,
        marginBottom: 0
    },

    invoiceHeaderRow: {
        display: 'flex',
        flexDirection: 'row',
    }

});


// Create styles
export const styles = StyleSheet.create({
    table: {
        marginTop: 10,
        display: "flex",
        width: "30%",
        borderWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
        marginTop: 0,
        marginBottom: 0
    },
    tableCol: {
        width: "50%",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 10,
        textAlign: "left"
    },
    page: {
        fontFamily: 'Times-Roman',
        fontSize: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        lineHeight: 1.5,
    },

    invoiceTableBodyFull: {
        minHeight: '100%',
    }

});