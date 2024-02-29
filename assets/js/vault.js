let provider = undefined;
let signer = undefined;
const abi = [

];
const contract_address = "0x...";


async function vaultButtonClicked() {
    if (window.ethereum !== undefined) {
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);

        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner();

        if (signer) {
            const vaultButton = document.getElementById("vaultBtn");
            const vaultSection = document.getElementById("vault");

            vaultButton.textContent = "Connected!";
            vaultSection.style.display = "block";

            document.getElementById("vault-nav").scrollIntoView({
                behavior: 'smooth',
                block: 'start' //scroll to top of the target element
            });

            return true;
        }

        return false;
    }

    return false;
}

function formSubmit() {
    const vaultSection = document.getElementById("vault");
    vaultSection.style.display = "none";
    if (provider !== undefined && signer !== undefined) {
        //const NFTCardShopContract = new ethers.Contract(contract_address, abi, signer);

        const email = document.getElementById("inputEmail4");
        const address = document.getElementById("inputAddress");
        const address2 = document.getElementById("inputAddress2");
        const city = document.getElementById("inputCity");
        const state = document.getElementById("inputState");
        const zip = document.getElementById("inputZip");

        // Another thing we could do is just send the email that the owner wants to use
        // to communicate with us to a function on the NFTCardShop contract.Then whenever
        // they communicate with us via a company email saying they want to hold the card,
        // we could just check that the email we are in communications with matches the email on the blockchain.
        // When the card comes back into the vault we'd want to remove it as a valid contact for future communications.

        // when the vault manager signs in using their admin wallet, the UI should present the cards that are being requested
        // from the vault with a checkmark and an X. Clicking the checkmark will result in the card being updated to the "out of the vault" state
        // on the contract and clicking X should remove the contact email.

        // In another section the UI should have a way for the vault manager to tell the contract that a card has been placed back into
        // the vault. Maybe an input for the tokenId??? Not sure exactly how this should be done.

        // const account = web3.eth.accounts[0];
        // const signature = await web3.eth.sign("Hello world", account);
        // const signingAddress = web3.eth.accounts.recover("Hello world", signature);

        // const hexPrivateKey = "0xae78c8b502571dba876742437f8bc78b689cf8518356c0921393d89caaf284ce";
        // const signingKey = new ethers.utils.SigningKey(hexPrivateKey);
        // const digest = ethers.utils.id("Some message");

        // const signature = signingKey.signDigest(digest);
        // const joinedSignature = ethers.utils.joinSignature(signature);
        // // 0xf0a760680a88ec3efff6e68ebce051b948cffd51d5814a448c0b32e35f2c753a6862077f01ae8edfccd524ba843b9340bcedfeafe62167fdd8517ca8528f398b1c

        // const recoveredAddress = ethers.utils.recoverAddress(digest, signature);
        // // 0x2f112ad225E011f067b2E456532918E6D679F978

        // const message = `${email}\n${address}\n${address2}\n${city}\n${state}\n${zip}`;
        // signer.signMessage(message).then(rawSignature => {

        // }).catch(err => {

        // });

        // save .values to a local database
        // use these values for when the admin logs in
        // or
        // email these .values to the vault manager
        alert("Card Request Submitted!");

        email.value = "";
        address.value = "";
        address2.value = "";
        city.value = "";
        state.value = "";
        zip.value = "";
    }
}