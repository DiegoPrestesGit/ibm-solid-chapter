class Xlsx {
    exportarXls(data: Array<T>) {/*    */}
}

class PDF {
    exportarPDF(data: Array<T>) {/*    */}
}

class ExportarDados {
    exportar(data: Array<T>, tipo: string) {
        if (tipo === 'xls') {
            new Xlsx().exportarXls(data);
        } else if (tipo === 'pdf') {
            new PDF().exportarPDF(data);
        }
    }
}
