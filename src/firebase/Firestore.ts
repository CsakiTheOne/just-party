import JDApp from '../model/JDApp';
import Game from '../model/Game';
import Party from '../model/Party';
import { app } from './firebase';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import LocalStorage from '../data/Local';
import Auth from './Auth';

export default class Firestore {

    static db = getFirestore(app);

    static isUserOrganizer(): Promise<boolean> {
        return getDoc(doc(this.db, `users/${Auth.auth.currentUser?.uid}`))
            .then(res => {
                return res.exists() && res.data().isOrganizer;
            })
            .catch(err => false)
    }

    static getParties(): Promise<Party[]> {
        return getDocs(query(collection(this.db, 'parties'), where('country', '==', LocalStorage.getCountry())))
            .then(res => res.docs.map(d => {
                return { ...d.data(), id: d.id } as Party;
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