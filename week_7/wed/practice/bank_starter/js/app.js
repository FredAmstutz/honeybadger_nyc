$(document).ready(function() {
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

        makeTransaction(type, account, amount) {
            
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

    let checkingDep = $('#checking .deposit');
    let checkingWith = $('#checking .withdraw');
    let savingsDep = $('#savings .deposit');
    let savingsWith = $('#savings .withdraw');

    let checkingBal = $('#checking .balance h1');
    let savingsBal = $('#savings .balance h1');

    let checkingAmnt = $('#checking .amount').val();
    let savingsAmnt = $('#savings .amount').val();

    checkingDep.click(function() {
        chase.accounts.checking.deposit(checkingAmnt);
    })

    checkingWith.click(function() {
        
    })

    savingsDep.click(function() {
       
    })

    savingsWith.click(function() {
        
    })
})
