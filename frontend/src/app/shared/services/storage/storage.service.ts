import { Injectable } from '@angular/core';
import { getStorage, ref, listAll, getMetadata, getDownloadURL } from '@angular/fire/storage';

interface FileData {
    name: string;
    url: string;
    timeCreated: string; // Garante que teremos a data de criação
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
                const url = await getDownloadURL(itemRef); // Obtém a URL confiável
                const metadata = await getMetadata(itemRef); // Obtém os metadados (inclui a data de criação)
                return {
                    name: itemRef.name,
                    url: url,
                    timeCreated: metadata.timeCreated, // Data de criação no formato ISO 8601
                };
            }));

            // Ordenar do mais novo para o mais antigo
            return files.sort((a, b) => new Date(b.timeCreated).getTime() - new Date(a.timeCreated).getTime());
        } catch (error) {
            console.error('Erro ao listar arquivos:', error);
            return [];
        }
    }
}
