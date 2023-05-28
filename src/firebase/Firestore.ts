import JDApp from '../model/JDApp';
import Game from '../model/Game';
import Party from '../model/Party';
import { app } from './firebase';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import LocalStorage from '../data/Local';
import Auth from './Auth';
import Profile from '../model/Profile';

export default class Firestore {

    static db = getFirestore(app);

    static isUserOrganizer(): Promise<boolean> {
        return getDoc(doc(this.db, `users/${Auth.auth.currentUser?.uid}`))
            .then(res => {
                return res.exists() && res.data().isOrganizer;
            })
            .catch(err => false)
    }

    static getProfile(id: string): Promise<Profile> {
        return getDoc(doc(this.db, `users/${id}`))
            .then(res => {
                return { ...res.data(), id: res.id } as Profile;
            })
            .catch(err => Promise.reject());
    }
    static setProfile(profile: Profile) {
        setDoc(doc(this.db, `users/${profile.id}`), profile);
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

    static createParty(party: Party): Promise<string> {
        return addDoc(collection(this.db, 'parties'), party)
            .then(res => res.id);
    }

    static updateParty(party: Party): Promise<void> {
        return setDoc(doc(this.db, `parties/${party.id}`), party);
    }

    static removeParty(id: string): Promise<void> {
        return deleteDoc(doc(this.db, `parties/${id}`));
    }

    static getGames(): Promise<Game[]> {
        return getDocs(collection(this.db, 'games'))
            .then(res => res.docs.map(d => d.data() as Game));
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