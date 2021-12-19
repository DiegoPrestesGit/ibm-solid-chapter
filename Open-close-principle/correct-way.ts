interface Arquivo {
    exportarArquivo(): File;
}

class Xlsx implements Arquivo {
    exportarArquivo(data: Array<T>) {/*    */}
}

class PDF implements Arquivo {
    exportarArquivo(data: Array<T>) {/*    */}
}

class ExportarDados {
    exportar(arquivo: Arquivo) {
        arquivo.exportarArquivo();
    }
}
