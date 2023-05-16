import JDApp from '../model/JDApp';
import Game from '../model/Game';
import Party from '../model/Party';
import { app } from './firebase';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export default class Firestore {

    static db = getFirestore(app);

    static getParties(): Promise<Party[]> {
        return getDocs(collection(this.db, 'parties'))
            .then(res => res.docs.map(d => {
                return {...d.data(), id: d.id} as Party;
            }))
            .catch(err => [] as Party[]);
    }

    static getParty(id: string): Promise<Party> {
        return getDoc(doc(this.db, `parties/${id}`))
            .then(res => res.data() as Party);
    }

    static getGameByName(name: string): Promise<Game> {
        return getDocs(query(collection(this.db, 'games'), where('name', '==', name)))
        .then(res => res.docs[0].data() as Game);
    }

    static getAppByName(name: string): Promise<JDApp> {
        return getDocs(query(collection(this.db, 'apps'), where('name', '==', name)))
        .then(res => res.docs[0].data() as JDApp);
    }

}