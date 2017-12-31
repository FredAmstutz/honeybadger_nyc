//////////////
// BANK OBJECT
//////////////

class Bank {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.accounts = {};
    }

    information() {
        return `${this.name}, ${this.address}`;
    }

    makeTransaction(account, amount) {
        let accountType;
        
        if (account == 'checking') {
            accountType = this.checking;
        }
        else if (account == 'savings') {
            accountType = this.savings;
        }
        else {
            console.log('Enter a valid account type');
        }
        
        const curBalance = chase.accounts.accountType.balance; 
        
        console.log(curBalance);
    }

    addAccount(name) {
        return this.accounts[name] = new Account();
    }
}

/////////////////
// ACCOUNT OBJECT - "CHILD" OF THE BANK CLASS
/////////////////


class Account {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if(this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            alert('You have insufficient funds.');
        }
    }
}

////////////////
// FUNCTIONALITY
////////////////

const chase = new Bank('Chase', 'New York, NY');
    
chase.addAccount('checking');
chase.addAccount('savings');

chase.makeTransaction('checking', 25);