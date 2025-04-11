'use client'
export default function getCookie(name) {
	if(typeof window !== "undefined"){
	const value = `; ${window.document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
 }
}
