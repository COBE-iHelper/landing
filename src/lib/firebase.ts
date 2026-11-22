import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";

const RECAPTCHA_ENTERPRISE_SITE_KEY =
  import.meta.env.VITE_FIREBASE_RECAPTCHA_ENTERPRISE_KEY ||
  "6LfcJCguAAAAAAyPiFl3nu57LJCFhx2lHWWtJIu5";

export const firebaseConfig = {
  apiKey: "AIzaSyAtevm_r7etYqq6xs_Sese78JhQvsulrC0",
  authDomain: "skillup-87de2.firebaseapp.com",
  projectId: "skillup-87de2",
  storageBucket: "skillup-87de2.firebasestorage.app",
  messagingSenderId: "796267021710",
  appId: "1:796267021710:web:05addc3aa84135398b10df",
};

// Initialize Firebase once
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let appCheckInitialized = false;
if (!appCheckInitialized && typeof window !== "undefined") {
  const host = window.location.hostname;
  const isLocal = host === "localhost" || host === "127.0.0.1";
  const debugToken = import.meta.env.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN;

  if (!isLocal || debugToken) {
    if (isLocal && debugToken) {
      (window as unknown as { FIREBASE_APPCHECK_DEBUG_TOKEN?: string | boolean }).FIREBASE_APPCHECK_DEBUG_TOKEN =
        debugToken === "true" ? true : debugToken;
    }
    try {
      initializeAppCheck(app, {
        provider: new ReCaptchaEnterpriseProvider(RECAPTCHA_ENTERPRISE_SITE_KEY),
        isTokenAutoRefreshEnabled: true,
      });
      appCheckInitialized = true;
    } catch {
      // Ignore duplicate initialization across HMR reloads
    }
  }
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};

export const signInWithEmail = async (email: string, pass: string) => {
  return await signInWithEmailAndPassword(auth, email.trim(), pass);
};

export const signUpWithEmail = async (email: string, pass: string) => {
  return await createUserWithEmailAndPassword(auth, email.trim(), pass);
};

export const logOut = async () => {
  return await signOut(auth);
};

export const subscribeToAuth = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
