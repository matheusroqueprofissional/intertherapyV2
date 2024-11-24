import { Injectable } from '@angular/core';
import { getStorage, ref, listAll, getDownloadURL } from '@angular/fire/storage';

interface FileData {
    name: string;
    url: string;
    timeCreated?: string;
}

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private storage = getStorage();

    async listFiles(): Promise<FileData[]> {
        try {
            const storageRef = ref(this.storage, 'images/');
            const result = await listAll(storageRef);

            const files = await Promise.all(result.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef); // Obtém a URL confiável do Firebase
                return {
                    name: itemRef.name,
                    url: url,
                };
            }));

            // Retorna os arquivos sem ordenar (pode adicionar ordenação aqui, se necessário)
            return files;
        } catch (error) {
            console.error('Erro ao listar arquivos:', error);
            return [];
        }
    }
}
