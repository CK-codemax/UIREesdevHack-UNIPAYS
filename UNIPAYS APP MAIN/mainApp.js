'use strict'
		
		
		
		//DOM ELEMENTS
		
		//SIGN IN
		const domVariables = { 
		rootEl : document.documentElement,
		
		//SCHOOL FEES
		toSchoolFeesEl : document.querySelector('#to-school-fees-page'),
		toSchoolFeesPageEl : document.querySelector('#school-fees-page-show'),
		schoolFeesToHomeEl : document.querySelector('#school-fees-to-home'),
		schoolFeesToPinEl : document.querySelector('#school-fees-total-btn'),
		gesFeeSelectEl : document.querySelector('#ges-fee-select'),
		schoolFeesSelectEl : document.querySelector('#school-fees-select'),
		utilityFeeSelectEl : document.querySelector('#utility-fee-select'),
		techFeeSelectEl : document.querySelector('#tech-fee-select'),
		professionalFeeSelectEl : document.querySelector('#professional-fee-select'),
		schoolFeesButtonTextEl : document.querySelector('#school-fee-total'),
		schoolFeesButtonSpinnerEl : document.querySelector('#school-fee-spinner'),
		schoolFeesSelectorAll : document.querySelectorAll('.fees-suggestions-container .withdraw-field-container'),
		schoolFeePaymentTypeEl : document.querySelector('#school-fee-data-type'),
		schoolFeesAmountPaid : document.querySelector('#school-fees-installment-paid'),
		schoolFeesAmountLeft : document.querySelector('#school-fees-installment-left'),
		schoolFeesNextPayment : document.querySelector('#school-fees-next-payment'),
		
		//WELCOME
		welcomePage : document.querySelector('#welcome-page'),
		welcomeImage : document.querySelector('#unipays-welcome-image'),
		
		
		//BODY
		bodyEl : document.body,
		
		//CHANGE MODE
		changeModeContainer : document.querySelector('#mode-toggle'),
		
		signInContainer : document.querySelector('#sign-in-el'),
		signInButtonEl : document.querySelector('#sign-in-btn'),
		signInPasswordEl : document.querySelector('#sign-in-password'),
		signInEmailEl : document.querySelector('#sign-in-email'),
		
		
		//HOME
		homeEl : document.querySelector('#home-page-el'),
		homeBalanceEl : document.querySelector('#balance-home'),
		hideBalanceEl : document.querySelector('#hide-balance'),
		
		
		toWithdraw : document.querySelector('#to-withdraw'),
		// document.querySelector('#')
		//	homeBalanceEl.textContent = '5';
		
		
		//ADD ACCOUNT
		
		addBankPage : document.querySelector('#add-account-page'),
		toAddBankPage : document.querySelector('#to-add-account-page'),
		
		addBankPageBack : document.querySelector('#add-account-page-to-home'),
		addBankPageName : document.querySelector('#add-bank-accname'),
		addBankPageNumber : document.querySelector('#add-bank-accno'),
		addBankPageBank : document.querySelector('#add-bank-bankname'),
		addBankPageBtn : document.querySelector('#add-bank-acc-btn'),
		
		
		
		
		//SIGNUP
		linkToSignup : document.querySelector('#link-to-sign-up'),
		linkToSignIn : document.querySelector('#link-to-sign-in'),
		signUpPage : document.querySelector('#sign-up-el'),
		
		linkToSignUpPage1 : document.querySelector('#back-to-sign-up1'),
		signUpBtn1 : document.querySelector('#sign-up-btn1'),
		signUpBtn2 : document.querySelector('#sign-up-btn2'),
		signUpFirstName : document.querySelector('#sign-up-firstname'),
		signUpLastName : document.querySelector('#sign-up-lastname'),
		signUpEmail : document.querySelector('#sign-up-email'),
		signUpMatricNo : document.querySelector('#sign-up-mat-no'),
		signUpDepartment : document.querySelector('#sign-up-department'),
		signUpPassword : document.querySelector('#sign-up-password1'),
		signUpConfirmPassword : document.querySelector('#sign-up-password2'),
		signUpQuestion1 : document.querySelector('#sign-up-security1'),
		signUpQuestion2 : document.querySelector('#sign-up-security2'),
		signUpPin : document.querySelector('#sign-up-create-pin'),
		signUpConfirmPin : document.querySelector('#sign-up-confirm-pin'),
		signUpContinue : document.querySelector('#sign-up-continue'),
		signUpPhoneNumber : document.querySelector('#sign-up-phone-number'),
		signUpAnswer1 : document.querySelector('#sign-up-answer1'),
		signUpAnswer2 : document.querySelector('#sign-up-answer2'),
		signInPasswordShow : document.querySelector('#sign-in-password-show'),
		signUpPasswordShow1 : document.querySelector('#sign-up-password1-show'),
		signUpPasswordShow2 : document.querySelector('#sign-up-password2-show'),
		
		//TOTAL ASSETS
		totalAssetsPage : document.querySelector('#total-assets-page'),
		totalAssetsBack : document.querySelector('#total-assets-page-to-home'),
		toTotalAssets : document.querySelector('#to-total-assets-page'),
		totalAssetsCurrentBalance : document.querySelector('#total-assets-current-balance'),
		totalAssetsMainBalance : document.querySelector('#total-assets-main-balance'),
		totalAssetsSavingsContainer : document.querySelector('#savings-history-total-assets'),
		
		
		
		//SAVINGS
		savingsPage : document.querySelector('#savings-page'),
		savingsPageBack : document.querySelector('#savings-to-home'),
		savingsDisburseDate : document.querySelector('#disburse-date'),
		savingsDisburseAmount : document.querySelector('#disburse-amount'),
		savingsDurationBtn : document.querySelector('#save-duration-btn'),
		savingsIncrease : document.querySelector('#save-increase'),
		savingsDecrease : document.querySelector('#save-decrease'),
		savingsSelect : document.querySelector('#save-select'),
		savingsButton : document.querySelector('#save-submit-btn'),
		toSavingsPage : document.querySelector('#to-save-page'),
		saveAmount : document.querySelector('#save-amount'),
		
		//ACTIVE TICKETS
		
		
		
		activeTicketsPage : document.querySelector('#active-tickets-page'),
		activeTicketsBack : document.querySelector('#active-tickets-to-home'),
		activeTicketsContainer : document.querySelector('#active-tickets-container'),
		toActiveTickets : document.querySelector('#to-active-tickets'),
		
		//SEARCH TRANSACTIONS
		searchTransactionsPage : document.querySelector('#search-transaction-page'),
		searchTransactionsContainer : document.querySelector('#search-transaction-details'),
		searchTransactionsBtn : document.querySelector('#search-transactions-btn'),
		searchTransactionsInput : document.querySelector('#search-transactions'),
		toSearchTransactions : document.querySelector('#to-search-transactions'),
		searchTransactionsBack : document.querySelector('#search-transactions-back'),
		
		//USE ACTIVE TICKETS
		
		toUseActiveTicketPage : document.querySelector('#use-active-tickets'),
		useActiveTicketPage : document.querySelector('#use-active-ticket-page'),
		useActiveTicketPageBack : document.querySelector('#use-active-ticket-back'),
		toUseActiveTicketContainer : document.querySelector('#use-active-ticket-details'),
		toUseActiveTicketBtn : document.querySelector('#use-active-ticket-btn'),
		useActiveTicketInput : document.querySelector('#use-active-ticket-input'),
		
		
		//WITHDRAW
		withdrawAmountEl : document.querySelector('#withdraw-amount'),
		withdrawAccNoEl : document.querySelector('#withdraw-account-number'),
		withdrawAccNameEl : document.querySelector('#withdraw-account-name'),
		withdrawBalanceEl : document.querySelector('#withdraw-balance'),
		withdrawBankEl : document.querySelector('#withdraw-bank-name'),
		withdrawPinEl : document.querySelector('#withdrawal-pin'),
		pinErrorEl : document.querySelector('#pin-error'),
		withdrawTypeOfTransactEl : document.querySelector('#type-of-transact-el'),
		//WITHDRAW PAGES
		withdrawPage1El : document.querySelector('#withdrawal-amount-page0'),
		withdrawPage2El : document.querySelector('#withdrawal-amount-page1'),
		withdrawPage3El : document.querySelector('#withdrawal-amount-page2'),
		withdrawPage4El : document.querySelector('#withdrawal-amount-page3'),
		
		//PIN PAGE VARIABLES
		pinTransactionTypeEl : document.querySelector('#withdraw-enter-pin-type'),
		pinTransactionAmountEl : document.querySelector('#withdraw-enter-pin-amount'),
		pinTransactionAccNameEl : document.querySelector('#withdraw-enter-pin-name'),
		pinTransactionAccNoEl : document.querySelector('#withdraw-enter-pin-number'),
		pinTransactionBankNameEl : document.querySelector('#withdraw-enter-pin-bank'),
		
		//HOSTEL 
		toHostelPage : document.querySelector('#to-hostel-page'),
		hostelToHome : document.querySelector('#hostel-to-home'),
		hostelPage : document.querySelector('#hostel-fees-page-show'),
		hostelAmountLeft : document.querySelector('#hostel-fees-installment-left'),
		hostelAmountPaid : document.querySelector('#hostel-fees-installment-paid'),
		hostelDueDate : document.querySelector('#hostel-fees-next-payment'),
		hostelFeeDataType : document.querySelector('#hostel-fee-data-type'),
		hostelFeeEl : document.querySelector('#hostel-fees-select'),
		hostelLevyEl : document.querySelector('#hostel-levy-select'),
		hostelButtonEl : document.querySelector('#hostel-fees-total-btn'),
		hostelButtonText : document.querySelector('#hostel-fee-total'),
		hostelFeesAll : document.querySelectorAll('.hostel-fees-suggestions-container .withdraw-field-container'),
		schoolFeeInstallDetails : document.querySelector('#school-fee-install-details'),
		hostelFeeInstallDetails : document.querySelector('#hostel-fee-install-details'),
		
		
		
		
		
		//WITHDRAW BUTTONS
		withdrawButton1El : document.querySelector('#withdraw-btn1'),
		withdrawButton2El : document.querySelector('#withdraw-btn2'),
		withdrawButton3El : document.querySelector('#withdraw-btn3'),
		
		//WITHDRAW BACKS
		withdrawBack1El : document.querySelector('#withdraw-to-home'),
		withdrawBack2El : document.querySelector('#withdraw-back1'),
		withdrawBack3El : document.querySelector('#withdraw-back2'),
		withdrawBack4El : document.querySelector('#withdraw-back3'),
		
		//WITHDRAW SUGGESTIONS
		withdrawSuggestAllEl : document.querySelectorAll('.amount-suggestion'),
		withdrawSuggestContainerEl : document.querySelector('#withdraw-suggest-el'),
		
		//FEEDBACK PAGE
		transactType : document.querySelector('#withdraw-enter-pin-type1'),
		transactName : document.querySelector('#withdraw-enter-pin-name1'),
		transactNumber : document.querySelector('#withdraw-enter-pin-number1'),
		transactBankName : document.querySelector('#withdraw-enter-pin-bank1'),
		transactAmount : document.querySelector('#withdraw-enter-pin-amount1'),
		transactID : document.querySelector('#withdraw-id1'),
		transactDate : document.querySelector('#withdraw-date1'),
		
		
		//MENU VARIABLES
		menuShowEl : document.querySelector('#menu-show'),
		menuEl : document.querySelector('#menu-bar'),
		closeMenu : document.querySelector('#close-menu'),
		showMenu : document.querySelector('#show-menu'),
		signOut : document.querySelector('#sign-out-btn'),
		menuTimeEl : document.querySelector('#account-menu-time'),
		menuNameEl : document.querySelector('#account-menu-name'),
		menuMatricNoEl : document.querySelector('#account-menu-matric-no'),
		
		//TRANSPORT
		transportPage : document.querySelector('#transport-page'),
		transportToHome : document.querySelector('#transport-page-to-home'),
		transportTicketAll : document.querySelector('#transport-all'),
		toTransport : document.querySelector('#to-transport'),
		
		
		//DATA PAGE VARIABLES
		toDataPageEl : document.querySelector('#to-data-page'),
		dataPageEl : document.querySelector('#data-page-show'),
		dataButtonEl : document.querySelector('#data-btn'),
		dataWrapEl : document.querySelector('#data-wrap'),
		dataGeneralEl : document.querySelector('#data-general-el'),
		dataAcademicsEl : document.querySelector('#data-academics-el'),
		dataBack1El : document.querySelector('#data-to-home'),
		dataButtonEl : document.querySelector('#data-btn'),
		dataInputEl : document.querySelector('#data-phone-number'),
		dataTypeContainer : document.querySelector('#data-type-container'),
		dataError1 : document.querySelector('#data-error1'),
		dataError2 : document.querySelector('#data-error2'),
		
		//AIRTIME VARIABLES
		toAirtimePageEl : document.querySelector('#to-airtime-page'),
		airtimePageEl : document.querySelector('#airtime-page-show'),
		airtimeButtonEl : document.querySelector('#airtime-btn'),
		airtimeSuggestionContainerEl : document.querySelector('#airtime-amount-el'),
		airtimePhoneNumberEl : document.querySelector('#airtime-phone-number'),
		airtimeAmountEl : document.querySelector('#airtime-amount'),
		airtimeToHomeEl : document.querySelector('#airtime-to-home'),
		feesError1 : document.querySelector('#airtime-error1'),
		feesError2 : document.querySelector('#airtime-error2'),
		
		
		//BANK
		toBankEl : document.querySelector('#to-bank'),
		
		
		//NETWORK
		dataNetworkType : document.querySelector('#data-network-type'),
		dataNetworkTypeIncrease : document.querySelector('#data-network-increase'),
		dataNetworkImageContainer : document.querySelector('#data-network-img'),
		airtimeNetworkImageContainer : document.querySelector('#airtime-network-img'),
		airtimeNetworkIncrease : document.querySelector('#airtime-network-increase'),
		airtimeNetworkType : document.querySelector('#airtime-network-type'),
		
		
		//SUCCESS PAGE
		successAccNameEl : document.querySelector('#success-account-name'),
		successAccNoEl : document.querySelector('#success-account-number'),
		successIDEl : document.querySelector('#success-id'),
		successDateEl : document.querySelector('#success-date'),
		successBankNameEl : document.querySelector('#success-bank-name'),
		successAmountEl : document.querySelector('#success-amount'),
		downloadSuccessReceipt : document.querySelector('#download-success-receipt'),
		successReceipt : document.querySelector('#success-download-html'),
		
		//LOAN HISTORY
		loanHistoryPage : document.querySelector('#loan-history-page'),
		loanHistoryBack : document.querySelector('#loan-history-page-back'),
		loanHistoryContainer : document.querySelector('#loan-history-details'),
		toLoanHistory : document.querySelector('#to-loan-history-page'),
		
		
		//PIN PAGE
		pinDetailsAccNameEl : document.querySelector('#pin-details-account-name'),
		pinDetailsAccNoEl : document.querySelector('#pin-details-account-number'),
		pinDetailsBankNameEl : document.querySelector('#pin-details-bank-name'),
		pinDetailsAmountEl : document.querySelector('#pin-details-amount'),
		
		//HISTORY
		historyShowEl : document.querySelector('#history'),
		historyContainerEl : document.querySelector('#history-details'),
		toHistoryEl : document.querySelector('#to-history'),
		historyToHomeEl : document.querySelector('#history-to-home'),
		
		//SLIDESHOW
		slideImages : document.querySelectorAll('.slide-img'),
		slideShowContainer : document.querySelector('#slide-show-container'),
		slideDotContainer : document.querySelector('.slide-dot-container'),
		
		//EXCHANGE PAGE
		toExchangePageEl : document.querySelector('#to-exchange-rate-page'),
		exchangePageEl : document.querySelector('#exchange-page-el'),
		exchangeToHomeEl : document.querySelector('#exchange-to-home'),
		exchangeContainerEl : document.querySelector('#exchange-to-naira'),
		
		//PROFILE PAGE
		profilePageEl : document.querySelector('#profile-page-el'),
		toProfilePage : document.querySelector('#to-profile-page'),
		profilePageToMenu : document.querySelector('#profile-to-menu'),
		profileFirstNameEl : document.querySelector('#profile-first-name'),
		profileLastNameEl : document.querySelector('#profile-last-name'),
		profileEmailEl : document.querySelector('#profile-email'),
		profilePhoneNumberEl : document.querySelector('#profile-phone-number'),
		profileDepartmentEl : document.querySelector('#profile-department'),
		profileMatricNoEl : document.querySelector('#profile-matric-no'),
		profilePageTopName : document.querySelector('#profile-page-top-name'),
		profileChangeBtn : document.querySelector('#profile-change-btn'),
		toProfilePage2 : document.querySelector('#to-profile-page2'),
		changeProfilePic : document.querySelector('#change-profile-pic'),
		profilePic : document.querySelectorAll('.profile-pic'),
		
		
		//CHANGE PIN
		toPinPage : document.querySelector('#to-change-pin'),
		changePinPage : document.querySelector('#change-pin'),
		setPinPage : document.querySelector('#set-pin'),
		changePinBack : document.querySelector('#change-pin-back-to-menu'),
		setPinBack : document.querySelector('#set-pin-to-home'),
		prevPinAnswer : document.querySelector('#previous-pin-answer'),
		newPinAnswer1 : document.querySelector('#new-pin-answer1'),
		newPinAnswer2 : document.querySelector('#new-pin-answer2'),
		pinQuestionAnswer1 : document.querySelector('#pin-answer1'),
		pinQuestionAnswer2 : document.querySelector('#pin-answer2'),
		pinQuestion1 : document.querySelector('#pin-question1'),
		pinQuestion2 : document.querySelector('#pin-question2'),
		changePinBtn : document.querySelector('#change-pin-btn'),
		setPinBtn : document.querySelector('#set-pin-btn'),
		
		
		
		//LOAN
		loanPageEl : document.querySelector('#loan-page'),
		loanContinuePageEl : document.querySelector('#loan-continue'),
		toLoanPage : document.querySelector('#to-loan-page'),
		loanContinueTuition : document.querySelector('#tuition-fees-btn'),
		loanContinueSoft : document.querySelector('#student-soft-loan-btn'),
		loanContinueBack : document.querySelector('#loan-continue-page-to-home'),
		loanBack : document.querySelector('#loan-page-to-home'),
		loanDuration : document.querySelector('#tuition-fees-duration-btn'),
		durationSelect : document.querySelector('#duration-select'),
		loanRepaymentDate : document.querySelector('#loan-repayment-date'),
		loanRepaymentAmount : document.querySelector('#loan-repayment-amount'),
		loanMainBtn : document.querySelector('#loan-final-submit-btn'),
		loanAskingAmount : document.querySelector('#loan-amount'),
		loanDurationIncrease : document.querySelector('#loan-increase'),
		loanDurationDecrease : document.querySelector('#loan-decrease'),
		tuitionGivenAmount : document.querySelector('#tuition-given-amount'),
		softLoanGivenAmount : document.querySelector('#soft-loan-given-amount'),
		
		//REPAY LOAN
		repayLoanPage : document.querySelector('#repay-loan-page'),
		repayLoanPageBack : document.querySelector('#repay-loan-back'),
		repayLoanAmount : document.querySelector('#repay-loan-amount'),
		repayLoanBtn : document.querySelector('#repay-loan-btn'),
		repayLoanBalance : document.querySelector('#repay-loan-balance'),
		
		
		//FOOD
		toFoodEl : document.querySelector('#home-to-food'),
		foodPageEl : document.querySelector('#food-ticket'),
		foodPageToHomeEl : document.querySelector('#food-page-to-home'),
		toBoluidPageEl : document.querySelector('#to-boluid-btn'),
		toNewflavaPageEl : document.querySelector('#to-newflava-btn'),
		toArchivePageEl : document.querySelector('#to-archives-btn'),
		toKlazzPageEl : document.querySelector('#to-klazz-btn'),
		toMamaAnatPageEl : document.querySelector('#to-mama-anat-btn'),
		foodContinueEl : document.querySelector('#food-continue'),
		backToFoodEl : document.querySelector('#back-to-food'),
		restaurantName : document.querySelector('#restaurant-name'),
		foodAmount : document.querySelector('#food-amount'),
		foodDecrement : document.querySelector('#food-decrease'),
		foodIncrement : document.querySelector('#food-increase'),
		foodNumber : document.querySelector('#food-number'),
		foodVenueEl : document.querySelector('#food-location'),
		foodOpenDays : document.querySelector('#food-open-days'),
		foodOpenTime : document.querySelector('#food-open-time'),
		foodToPinEl : document.querySelector('#food-final-btn'),
		
		//BOOKSHOP PAGE
		toBookPage : document.querySelector('#to-bookshop'),
		bookButton : document.querySelector('#book-submit-btn'),
		bookPage : document.querySelector('#book-shop-page'),
		bookToHomePage : document.querySelector('#bookshop-to-home'),
		bookName : document.querySelector('#book-name'),
		bookAmount : document.querySelector('#book-amount'),
		bookNumber : document.querySelector('#book-number'),
		bookIncrease : document.querySelector('#book-increase'),
		bookDecrease : document.querySelector('#book-decrease'),
		
		//FUND
		fundPage : document.querySelector('#fund-page'),
		fundPageBtn : document.querySelector('#fund-btn'),
		fundContinuePage : document.querySelector('#fund-continue'),
		fundContinuePageBtn : document.querySelector('#fund-final-btn'),
		fundPageToHome : document.querySelector('#fund-to-home'),
		fundContinueBack : document.querySelector('#back-to-fund'),
		toFundPage : document.querySelector('#to-fund-page'),
		fundVerify : document.querySelector('#fund-verify'),
		fundAmountText : document.querySelector('#fund-amount-text'),
		fundNumber : document.querySelector('#fund-number'),
		fundAccountNumber : document.querySelector('#fund-account-number'),
		fundAmountInput : document.querySelector('#fund-amount'),
		
		//TO UNIPAYS
		unipaysPage : document.querySelector('#unipays-page'),
		unipaysToHome : document.querySelector('#unipays-to-home'),
		toUnipaysPage : document.querySelector('#to-unipays'),
		unipaysBtn : document.querySelector('#unipays-transfer-btn'),
		unipaysMatricInput : document.querySelector('#unipays-matric-no'),
		unipaysName : document.querySelector('#unipays-account-name'),
		unipaysSpinner : document.querySelector('#unipays-name-spinner'),
		
		
		
		
		//VARIABLES USED IN MULTIPLE PAGES
		nameSpinner : document.querySelector('#name-spinner'),
		}
		
		//DATA
		
		//HELPER FUNCTIONS
		const formatNumber = function(number){
		return new Intl.NumberFormat('en-GB').format(number);
		}
		
		const updateBalance = function(currentBalance){
		
		const balance = formatNumber(currentBalance);
		domVariables.homeBalanceEl.innerHTML = `<span>&#8358;</span><span>${balance}</span>`;
		domVariables.withdrawBalanceEl.innerHTML = `<span>&#8358;</span><span>${balance}</span>`;
		domVariables.repayLoanBalance.innerHTML = `<span>&#8358;</span><span>${balance}</span>`;
		domVariables.totalAssetsCurrentBalance.textContent = balance
		}
		
		
		
		const hideMainAreaContent = function(){
		const allMain = [domVariables.searchTransactionsPage, domVariables.useActiveTicketPage, domVariables.withdrawPage1El, domVariables.withdrawPage2El, domVariables.withdrawPage3El, domVariables.withdrawPage4El, domVariables.dataPageEl, domVariables.airtimePageEl, domVariables.hostelPage, domVariables.toSchoolFeesPageEl, domVariables.loanContinuePageEl, domVariables.loanPageEl, domVariables.loanHistoryPage, domVariables.repayLoanPage, domVariables.foodPageEl, domVariables.foodContinueEl, domVariables.transportPage, domVariables.savingsPage, domVariables.bookPage, domVariables.fundContinuePage, domVariables.fundPage, domVariables.unipaysPage, domVariables.exchangePageEl ]
		allMain.forEach((el) => hidePage(el))
		
		}
		
		
		
		const showWide = function(el){
		
		el.classList.add('show-menu-arrange')
		el.classList.remove('hide-menu-arrange')
		
		}
		
		const hideWide = function(el){
		
		el.classList.remove('show-menu-arrange')
		el.classList.add('hide-menu-arrange')
		
		}
		
		
		
		const showPage = function(page){
		page.classList.remove('hide')
		page.classList.add('show')
		}
		
		const hidePage = function(page){
		page.classList.add('hide')
		page.classList.remove('show')
		}
		
		/*	const togglePage = function(page){
		page.classList.toggle('hide')
		page.classList.toggle('show')
		}*/
		
		const clearInputs = function(){
		
		domVariables.withdrawAmountEl.value = ""
		domVariables.withdrawAccNoEl.value = ""
		domVariables.withdrawBankEl.value = ""
		domVariables.withdrawPinEl.value = ""
		
		domVariables.withdrawSuggestAllEl.forEach((t) => t.style.backgroundColor = "var(--BG-COLOR-LIGHT-1)");
		
		
		
		}
		
		const formatSchoolFee = function(feesClicked){
		const fees = feesClicked.filter((el) => el !== undefined)
		const fees2 = fees.filter((el) => el.length > 1)
		
		return fees2.join(', ')
		
		
		}
		
		const arrayToLowerCase = function(arr){
		return arr.map((el) => el.toLowerCase())
		}
		
		const hideProfilePages = function(){
		
		[domVariables.addBankPage ,domVariables.totalAssetsPage 
		,domVariables.activeTicketsPage, domVariables.profilePageEl, 
		domVariables.changePinPage, domVariables.setPinPage].forEach((el) => hidePage(el))
		
		
		}
		
		const getCurrentDate = function(isostring){
		const currentDate = new Date(isostring)
		return currentDate.toDateString()
		}
		
		const formattedDate = function(isostring){
		const newDate = new Date (isostring)
		return new Intl.DateTimeFormat('en-GB', {day:'numeric', weekday:'short', month:'short', year:'numeric'}).format(newDate);
		
		}
		
		const createID = function(isostring, type){
		const randomNumber = Math.trunc(Math.random() * 5000) + 1000
		
		return `${type.slice(0, 3).toUpperCase()}${randomNumber}${isostring.slice(-4)}`
		}
		
		
		const toLowerCase = function(uppercase){
		return uppercase.toLowerCase()
		}
		
		const calcBalance = function(account){
		
		const totalWithdrawal = account.transactions.filter((acc) => acc.to).reduce((sum, acc) =>sum + acc.to.amount, 0);
		const totalReceive = account.transactions.filter((acc) => acc.from).reduce((sum, acc) =>sum + acc.from.amount, 0);
		return totalWithdrawal + totalReceive;
		
		}
		
		const moveUp = function(el){
		el.classList.add('move-up')
		}
		
		const moveDown = function(el){
		el.classList.remove('move-up')
		}
		
		const clearFees = function(){
		discount = 0
		feesAmount = 0
		withdrawAmount = 0
		hidePage(domVariables.pinErrorEl)
		}
		
		
		
		const setLocalStorage = function(accounts){
		localStorage.setItem('registeredAccounts', JSON.stringify(accounts))
		}
		
		/*	const getLocalStorage = function(accounts){
		const data = JSON.parse(localStorage.getItem('registeredAccounts'))
		
		if(!data)return
		
		accounts = data
		}*/
		
		const hideHome = function(){
		
		domVariables.homeEl.classList.remove('hide-menu-arrange')
		domVariables.homeEl.classList.remove('show-menu-arrange')
		domVariables.homeEl.classList.remove('hide-history-arrange')
		domVariables.homeEl.classList.remove('hide-history-arrange')
		domVariables.historyShowEl.classList.add('hide-history-arrange')
		domVariables.historyShowEl.classList.remove('show-history-arrange')
		
		}
		
		
		
		const configSuccessPage = function(config){
		domVariables.successAccNameEl.textContent = `${config.name} : `;
		domVariables.successAccNoEl.textContent = `${config.number} : `;
		domVariables.successIDEl.textContent = 'ID :';
		domVariables.successDateEl.textContent = 'Date :';
		domVariables.successBankNameEl.textContent = `${config.nameBank} : `;
		domVariables.successAmountEl.textContent = `${config.amount} : `;
		}
		
		const displaySuccess = function(transaction){
		
		domVariables.transactType.textContent = `${transaction.type}`
		domVariables.transactName.textContent = `${transaction.to.receiverAccName}`
		domVariables.transactNumber.textContent = `${transaction.to.receiverAccNo}`
		domVariables.transactBankName.textContent = `${transaction.to.receiverBankName}`
		domVariables.transactAmount.textContent = `${Math.abs(transaction.to.amount)}`
		domVariables.transactID.textContent = `${transaction.to.id}`
		domVariables.transactDate.textContent = formattedDate(transaction.date)
		
		}
		
		const updatePinPage = function(transactionDetails){
		
		domVariables.pinTransactionTypeEl.textContent = `${transactionDetails.type}`
		domVariables.pinTransactionAccNameEl.textContent = `${transactionDetails.accName}`
		domVariables.pinTransactionAccNoEl.textContent = `${transactionDetails.accNo}`
		domVariables.pinTransactionBankNameEl.textContent = `${transactionDetails.bankName}`
		domVariables.pinTransactionAmountEl.textContent = `${Math.abs(transactionDetails.amount)}`
		
		}
		
		const createTransactDetails = function(transactionAccount1, transactionAccount2, amount){
		return {
		currentAccName : transactionAccount1.accountName,
		currentAccNo : transactionAccount1.accountNumber,
		currentBankName : transactionAccount1.bankName,
		transactAccName : transactionAccount2.accountName,
		transactAccNo : transactionAccount2.accountNumber,
		transactBankName : transactionAccount2.bankName,
		transactionDate : new Date().toISOString(),
		amount : amount
		}
		}
		
		
		
		
		
		//ES6 CLASSES
		const NewTransactionTransfer = class{
		constructor(details){
		this.accName = details.currentAccountName;
		this.accNo = details.currentAccountNumber;
		this.date = details.transactionDate;
		this.senderBankName = details.currentBankName;
		}
		}
		
		const NewTransactionReceiver = class{
		constructor(details){
		this.accName = details.transactAccName;
		this.accNo = details.transactAccNo;
		this.date = details.transactionDate;
		this.receiverBankName = details.transactBankName;
		}
		}
		
		//MINUS CURRENT ACCOUNT
		const TransactWithdrawal = class extends NewTransactionTransfer{
		constructor(details){
		super(details)
		this.type = 'withdrawal';
		this.to = {
		receiverAccName : details.transactAccName,
		receiverAccNo : details.transactAccNo,
		amount : -details.amount,
		receiverBankName : details.transactBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		//MINUS CURRENT ACCOUNT
		const TransactTransfer = class extends NewTransactionTransfer{
		constructor(details){
		super(details)
		this.type = 'transfer';
		this.to = {
		receiverAccName : details.transactAccName,
		receiverAccNo : details.transactAccNo,
		amount : -details.amount,
		receiverBankName : details.transactBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		const TransactSavings = class extends NewTransactionTransfer{
		constructor(details){
		super(details)
		this.type = 'Smart Savings';
		this.status = 'active';
		this.to = {
		receiverAccName : details.transactAccName,
		receiverAccNo : details.transactAccNo,
		amount : -details.amount,
		receiverBankName : details.transactBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		//PLUS CURRENT ACCOUNT
		const TransactReceiver = class extends NewTransactionReceiver{
		constructor(details){
		super(details)
		this.type = 'receive';
		this.from = {
		senderAccName : details.currentAccountName,
		senderAccNo : details.currentAccountNumber,
		amount : +details.amount,
		senderBankName : details.currentBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		const TransactFund = class extends NewTransactionReceiver{
		constructor(details){
		super(details)
		this.type = 'Fund account';
		this.from = {
		senderAccName : details.currentAccountName,
		senderAccNo : details.currentAccountNumber,
		amount : +details.amount,
		senderBankName : details.currentBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		const TransactTicket = class extends NewTransactionReceiver{
		constructor(details){
		super(details)
		this.type = 'Cashout Ticket';
		this.from = {
		senderAccName : details.currentAccountName,
		senderAccNo : details.currentAccountNumber,
		amount : +details.amount,
		senderBankName : details.currentBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		const TransactLoan = class extends NewTransactionReceiver{
		constructor(details, repayDate, repayAmount){
		super(details)
		this.type = 'Student Loan';
		this.status = 'active';
		this.from = {
		senderAccName : details.currentAccountName,
		senderAccNo : details.currentAccountNumber,
		amount : +details.amount,
		repayDate : repayDate,
		repayAmount : repayAmount,
		amountPaid : 0,
		senderBankName : details.currentBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		
		const displaySuccessReceive = function(transaction){
		
		domVariables.transactType.textContent = `${transaction.type}`
		domVariables.transactName.textContent = `${transaction.accName}`
		domVariables.transactNumber.textContent = `${transaction.accNo}`
		domVariables.transactBankName.textContent = `${transaction.receiverBankName}`
		domVariables.transactAmount.textContent = `${Math.abs(transaction.from.amount)}`
		domVariables.transactID.textContent = `${transaction.from.id}`
		domVariables.transactDate.textContent = formattedDate(transaction.date)
		
		}
		
		
		const TransactData = class extends NewTransactionTransfer{
		constructor(details){
		super(details)
		this.type = 'Buy Data';
		this.to = {
		receiverAccName : details.transactAccName,
		receiverAccNo : details.transactAccNo,
		amount : -details.amount,
		receiverBankName : details.transactBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		
		const TransactAirtime = class extends NewTransactionTransfer{
		constructor(details){
		super(details)
		this.type = 'Buy Airtime';
		this.to = {
		receiverAccName : details.transactAccName,
		receiverAccNo : details.transactAccNo,
		amount : -details.amount,
		receiverBankName : details.transactBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		
		const TransactSchoolFees = class extends NewTransactionTransfer{
		constructor(details, paymentType){
		super(details)
		this.type = 'Pay School Fees';
		this.to = {
		receiverAccName : details.transactAccName,
		receiverAccNo : details.transactAccNo,
		amount : -details.amount,
		paymentType : paymentType,
		receiverBankName : details.transactBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		
		const TransactHostelFees = class extends NewTransactionTransfer{
		constructor(details, paymentType){
		super(details)
		this.type = 'Pay Hostel Fees';
		this.to = {
		receiverAccName : details.transactAccName,
		receiverAccNo : details.transactAccNo,
		amount : -details.amount,
		paymentType : paymentType,
		receiverBankName : details.transactBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		
		
		
		
		
		const TransactBooks = class extends NewTransactionTransfer{
		constructor(details){
		super(details)
		this.type = 'Buy Books';
		this.status = 'active';
		this.to = {
		receiverAccName : details.transactAccName,
		receiverAccNo : details.transactAccNo,
		amount : -details.amount,
		receiverBankName : details.transactBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		const TransactFood = class extends NewTransactionTransfer{
		constructor(details, ticketNumber){
		super(details)
		this.type = 'Food Tickets';
		this.status = 'active';
		this.to = {
		receiverAccName : details.transactAccName,
		receiverAccNo : details.transactAccNo,
		ticketNo : ticketNumber,
		amount : -details.amount,
		receiverBankName : details.transactBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		
		const TransactTransport = class extends NewTransactionTransfer{
		constructor(details, ticketNumber){
		super(details)
		this.type = 'Transport Tickets';
		this.status = 'active';
		this.to = {
		receiverAccName : details.transactAccName,
		receiverAccNo : details.transactAccNo,
		ticketNo : ticketNumber,
		amount : -details.amount,
		receiverBankName : details.transactBankName,
		id : createID(this.date, this.type),
		}
		}
		}
		
		
		const dataObj = function(dataQuantity, phoneNumber, amount, network){
		return {dataQuantity : dataQuantity,
		phoneNumber : phoneNumber,
		amount : amount,
		network : network,
		}
		}
		
		const pinPageDisplay = function(trans){
		domVariables.pinDetailsAccNameEl.textContent = `${trans.toName} :`
		domVariables.pinDetailsAccNoEl.textContent = `${trans.toNumber} :`
		domVariables.pinDetailsBankNameEl.textContent = `${trans.organization} :`
		domVariables.pinDetailsAmountEl.textContent = 'Amount :'
		}
		
		const configureProfilePage = function(account){
		domVariables.profileFirstNameEl.value = account.firstName;
		domVariables.profileLastNameEl.value = account.lastName;
		domVariables.profileEmailEl.value = account.email;
		domVariables.profilePhoneNumberEl.value = account.phoneNo;
		domVariables.profileDepartmentEl.value = account.department;
		domVariables.profileMatricNoEl.value = account.matricNo;
		domVariables.menuTimeEl.textContent = new Date().toLocaleDateString();
		domVariables.menuNameEl.textContent = `${account.firstName.toUpperCase()} ${account.lastName.toUpperCase()}`;
		domVariables.profilePageTopName.textContent = `${account.firstName.toUpperCase()} ${account.lastName.toUpperCase()}`;
		domVariables.menuMatricNoEl.textContent = account.matricNo;
		
		domVariables.profilePic.forEach((el) => {if(currentAccount.profilePic === ''){
		el.innerHTML = `<i class="fa-solid fa-user fa-2xl"></i>`
		}else{
		el.src = currentAccount.profilePic
		el.innerHTML = `<img class="profile-pic-image network-img" src="${currentAccount.profilePic}">`
		}
		})
		
		}
		
		
		
		const displayHistory = function(currentAccount){
		
		domVariables.historyContainerEl.innerHTML = ""
		
		currentAccount.transactions.forEach((el) => {
		
		if(el.type === 'Food Tickets'){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Account Name :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Restautant Name :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Venue :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Number of Tickets :</p> <span>${el.to.ticketNo}</span></div>
		<div class="details-arrange"><p>Ticket Amount :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.ticketNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.historyContainerEl.insertAdjacentHTML('afterbegin', html)
		
		}else if(el.type === 'Transport Tickets'){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Number Of Tickets :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Destination :</p> <span>${el.to.ticketNo}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Transport Type :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Ticket Amount :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.receiverAccNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.historyContainerEl.insertAdjacentHTML('afterbegin', html)
		
		
		}else if(el.type === 'withdrawal' || el.type === 'transfer'){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Account Name :</p> <span>${el.to.receiverAccName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Account Number :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${Math.abs(el.to.amount)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.historyContainerEl.insertAdjacentHTML('afterbegin', html)
		}
		else if(el.type === 'receive' || el.type === 'Fund account'){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Account Name :</p> <span>${el.accName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Account Number :</p> <span >${el.accNo}</span></div>
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${el.from.amount}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.from.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.historyContainerEl.insertAdjacentHTML('afterbegin', html)
		
		
		}
		else if(el.type === 'Buy Data'){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Data Quantity :</p> <span>${el.to.receiverAccName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Phone Number :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Network :</p> <span>${el.to.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${Math.abs(el.to.amount)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.historyContainerEl.insertAdjacentHTML('afterbegin', html)
		
		}
		else if(el.type === 'Pay School Fees' || el.type === 'Pay Hostel Fees'){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Account Name:</p> <span>${el.to.receiverAccName.toUpperCase()}</span></div>
		<div class="details-arrange"><p class="config-arrange">Account Number :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Payment Type :</p> <span >${el.to.paymentType}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${Math.abs(el.to.amount)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.historyContainerEl.insertAdjacentHTML('afterbegin', html)
		
		}
		else if(el.type === 'Buy Books'){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Number Of Books :</p> <span >${el.to.receiverAccNo}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Name Of Book :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Amount Of Book :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.receiverAccNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.historyContainerEl.insertAdjacentHTML('afterbegin', html)
		
		
		}
		else if(el.type === 'Student Loan'){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Loan Type :</p> <span>${el.accName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Creditor :</p> <span >${el.accNo}</span></div>
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Amount Borrowed :</p> <span>&#8358;${el.from.amount}</span></div>
		<div class="details-arrange"><p>Amount Payable :</p> <span>&#8358;${el.from.repayAmount + el.from.amountPaid}</span></div>
		<div class="details-arrange"><p>Due Date :</p> <span>${new Date(el.from.repayDate).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})}</span></div>
		<div class="details-arrange"><p>Amount Paid :</p> <span>&#8358;${el.from.amountPaid}</span></div>
		<div class="details-arrange"><p>Amount Left :</p> <span>&#8358;${el.from.repayAmount}</span></div>
		
		<div class="details-arrange"><p>Loan Status :</p> <span>${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.from.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.historyContainerEl.insertAdjacentHTML('afterbegin', html)
		
		
		}
		else if(el.type === 'Smart Savings'){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Disbursement Date :</p> <span>${new Date(el.to.receiverAccName).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})}</span></div>
		<div class="details-arrange"><p>Repayment Amount :</p> <span >&#8358;${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${Math.abs(el.to.amount)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.historyContainerEl.insertAdjacentHTML('afterbegin', html)
		}
		else if(el.type === 'Buy Airtime'){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Airtime Amount :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Phone Number :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Network :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${Math.abs(el.to.amount)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.historyContainerEl.insertAdjacentHTML('afterbegin', html)
		
		}
		
		
		})
		
		}
		
		
		//ACCOUNTS
		
		const createBeginTransactions = function(acc, amount1, amount2){
		const major1 = {
		accountName : 'great',
		accountNumber : 6327,
		bankName : 'FCMB',
		}
		
		const major2 = {
		accountName : 'goodness',
		accountNumber : 6329,
		bankName : 'ecobank',
		}
		
		acc.transactions.push(new TransactWithdrawal(createTransactDetails(major1, major2, amount1)));
		acc.transactions.push(new TransactTransfer(createTransactDetails(major1, major2, amount1)));
		acc.transactions.push(new TransactReceiver(createTransactDetails(major1, major2, amount2)));
		
		
		}
		const account1 = {
		firstName : 'ochuko',
		lastName : 'whoro',
		matricNo : 238510,
		phoneNo : 7030246,
		email : 'ochuko@gmail.com',
		password : 'try1',
		department : 'mbbs',
		faculty : 'clinical sciences',
		currentLevel : 200,
		yearOfEntry : 2021,
		transactions : [],
		pin : 1111,
		pinQuestion1 :`What is your mother's maiden name`,
		pinQuestion2 :`What is your best food`,
		pinAnswer1 : `peace`,
		pinAnswer2 : `fried rice`,
		maxSoftLoan : 6000,
		softLoanRepaymentDate : 0,
		schoolFees : {
		firstDate : new Date(),
		installment : false,
		paymentMade : 0,
		schoolFeesTotalAmount : 0,
		schoolFeeInstallmentType : 1,
		schoolFeesPaidTotally : [],
		schoolFeesPaidPartially : [],},
		
		hostelFees : {
		installment : false,
		paymentMade : 0,
		hostelFeesTotalAmount : 0,
		hostelFeeInstallmentType : 1,
		hostelFeesPaidTotally : [],
		hostelFeesPaidPartially : [],
		},
		
		accountNumber : 1111,
		accountName : 'ochuko',
		bankName : 'first',
		fundNumber : 0,
		profilePic : 'Images/my_profile.jpg',
		}
		
		
		createBeginTransactions(account1, 20000, 80000)
		
		
		
		const account2 = {
		firstName : 'goodluck',
		lastName : 'kelvin',
		matricNo : 259313,
		phoneNo : 7030246,
		email : 'goodkelv@gmail.com',
		password : 'kvngd',
		department : 'law',
		faculty : 'faculty of law',
		currentLevel : 200,
		yearOfEntry : 2021,
		transactions : [],
		pin : 2222,
		pinQuestion1 :`What is the name of your best friend`,
		pinQuestion2 :`What is the name of your highschool`,
		pinAnswer1 : `gold`,
		pinAnswer2 : `isi`,
		maxSoftLoan : 6000,
		softLoanRepaymentDate : 0,
		schoolFees : {
		firstDate : new Date(),
		installment : false,
		paymentMade : 0,
		schoolFeesTotalAmount : 0,
		schoolFeeInstallmentType : 1,
		schoolFeesPaidTotally : [],
		schoolFeesPaidPartially : [],},
		
		hostelFees : {
		installment : false,
		paymentMade : 0,
		hostelFeesTotalAmount : 0,
		hostelFeeInstallmentType : 1,
		hostelFeesPaidTotally : [],
		hostelFeesPaidPartially : [],
		},
		
		accountNumber : 2222,
		accountName : 'kelvin',
		bankName : 'access',
		fundNumber : 0,
		profilePic : 'Images/my_profile2.jpg',
		}
		
		createBeginTransactions(account2, 20000, 80000)
		
		
		
		let newAccount;
		
		
		const createNewAccount = function(){
		
		const newAccount = {
		firstName : domVariables.signUpFirstName.value,
		lastName : domVariables.signUpLastName.value,
		matricNo : +domVariables.signUpMatricNo.value,
		email : domVariables.signUpEmail.value,
		password : domVariables.signUpPassword.value,
		department : domVariables.signUpDepartment.value,
		phoneNo : +domVariables.signUpPhoneNumber.value,
		transactions : [],
		pin : +domVariables.signUpPin.value,
		pinQuestion1 : domVariables.signUpQuestion1.value,
		pinQuestion2 : domVariables.signUpQuestion2.value,
		pinAnswer1 : domVariables.signUpAnswer1.value.toLowerCase(),
		pinAnswer2 : domVariables.signUpAnswer2.value.toLowerCase(),
		maxSoftLoan : 6000,
		softLoanRepaymentDate : 0,
		schoolFees : {
		installment : false,
		paymentMade : 0,
		schoolFeesTotalAmount : 0,
		schoolFeeInstallmentType : 1,
		schoolFeesPaidTotally : [],
		schoolFeesPaidPartially : [],
		},
		hostelFees : {
		installment : false,
		paymentMade : 0,
		hostelFeesTotalAmount : 0,
		hostelFeeInstallmentType : 1,
		hostelFeesPaidTotally : [],
		hostelFeesPaidPartially : [],
		},
		fundNumber : 0,
		profilePic : '',
		}
		
		
		createBeginTransactions(newAccount, 1000, 60000)
		
		return newAccount
		}
		
		
		let accounts = [account1, account2, ]
		
		//setLocalStorage(accounts)
		
		const getLocalStorage = function(accounts){
		const data = JSON.parse(localStorage.getItem('registeredAccounts'))
		
		
		
		return data
		}
		
		getLocalStorage() ? accounts = getLocalStorage() : accounts = [account1, account2]
		
		
		//IMPLEMENTING SIGN-IN
		let transactionType;
		let transactionDetails;
		let currentAccount;
		let currentBalance = 0;
		let feesAmount = 0;
		let phoneNumber = 0;
		let withdrawAccount;
		let withdrawAmount = 0;
		let dataQuantity;
		let network;
		let schoolFeeType = [];
		let hostelFeeType = [];
		let curSlide = 0;
		let discount = 0;
		let time = 1;
		let networkValue = 0
		const networksAvailable = [{img : 'mtn.png', name : 'MTN' }, {img : 'glo.jpeg', name : 'Glo' }, {img : 'airtel.png', name : 'Airtel' }, {img : '9mobile.jpeg', name : '9mobile' },]
		let loanType;
		let loanNow;
		let loanDay;
		let repaymentDate;
		let restaurantName;
		let restaurantVenue;
		let tuitionRepaymentDueDate;
		let loanTuitionNow;
		let tuitionLoanDay;
		let transportType;
		let ticketNumber;
		let saveDisburseDate = 7
		let disburseDate;
		let savingsDate;
		let disburseAmount;	
		let bookNumber;
		let bookName;
		let destinationTransport;
		let loanRepayAmount;
		let loanRepayDate;
		let timer;
		
		
		const goToSlide = function(slide){
		domVariables.slideImages.forEach((el, i) => el.style.transform = `translateX(${100 * (i - slide)}%)`)
		}
		
		const createDot = function(){
		domVariables.slideDotContainer.innerHTML = ""
		
		domVariables.slideImages.forEach((_, i) => {
		const html = `<div class="slide-dot" data-slide="${i}"></div>`
		domVariables.slideDotContainer.insertAdjacentHTML('beforeend', html)
		})
		}
		
		const showActiveDot = function(){
		document.querySelectorAll('.slide-dot').forEach((el) => {
		
		el.style.backgroundColor = "var(--TEXT-COLOR-LIGHT)"
		
		})
		
		document.querySelector(`.slide-dot[data-slide="${curSlide}"]`).style.backgroundColor = "red"
		}
		
		
		
		setTimeout(() => {
		hidePage(domVariables.welcomePage)
		showPage(domVariables.signInContainer)
		}, 1250)
		
		//-------SIGN UP-------
		
		//TO SIGN UP PAGE
		domVariables.linkToSignup.addEventListener('click', function(){
		showPage(domVariables.signUpPage)
		hidePage(domVariables.signInContainer)
		})
		
		
		
		//BACK TO SIGN IN PAGE
		domVariables.linkToSignIn.addEventListener('click', function(){
		hidePage(domVariables.signUpPage)
		showPage(domVariables.signInContainer)
		})
		
		//TO SIGN UP CONTINUE PAGE
		domVariables.signUpBtn1.addEventListener('click', function(){
		if(domVariables.signUpFirstName.value.length === 0 || domVariables.signUpLastName.value.length === 0 ||
		domVariables.signUpEmail.value.length === 0 || domVariables.signUpDepartment.value.length === 0 || 
		domVariables.signUpMatricNo.value.length === 0 || domVariables.signUpPhoneNumber.value.length === 0 ||
		domVariables.signUpPassword.value.length === 0 || domVariables.signUpConfirmPassword.value.length === 0
		
		)return
		
		if(domVariables.signUpPassword.value !== domVariables.signUpConfirmPassword.value )return
		if(!domVariables.signUpEmail.value.split('').includes('@') || !domVariables.signUpEmail.value.split('').includes('.'))return
		
		hidePage(domVariables.signUpPage)
		showPage(domVariables.signUpContinue)
		
		})
		
		//TO SIGN UP PAGE 1
		domVariables.linkToSignUpPage1.addEventListener('click', function(){
		showPage(domVariables.signUpPage)
		hidePage(domVariables.signUpContinue)
		
		})
		
		//CREATE ACCOUNT AND LOGIN
		domVariables.signUpBtn2.addEventListener('click', function(){
		if(domVariables.signUpAnswer1.value.length === 0  || domVariables.signUpQuestion1.value.length === 0 ||
		domVariables.signUpAnswer2.value.length === 0 || domVariables.signUpQuestion2.value.length === 0 ||
		domVariables.signUpPin.value.length !== 4  || domVariables.signUpConfirmPin.value.length !== 4
		)return
		
		if(domVariables.signUpPin.value !== domVariables.signUpConfirmPin.value)return
		
		newAccount = createNewAccount()
		
		accounts.push(newAccount)
		
		localStorage.clear()
		setLocalStorage(accounts)
		
		//	setLocalStorage(accounts)
		currentAccount = newAccount
		
		
		
		
		domVariables.menuEl.classList.remove('hide')
		domVariables.menuEl.classList.remove('hide-menu-arrange')
		domVariables.menuEl.classList.add('show-menu-arrange')
		
		domVariables.historyShowEl.classList.remove('hide')
		domVariables.historyShowEl.classList.remove('show-history-arrange')
		domVariables.historyShowEl.classList.add('hide-history-arrange')
		
		
		displayHistory(currentAccount)
		
		showPage(domVariables.homeEl)
		configureProfilePage(currentAccount)
		
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		goToSlide(0)
		
		clearInterval(timer)
		curSlide = 0
		timer = setInterval(() => {curSlide < 7 ? curSlide++ : curSlide = 0
		goToSlide(curSlide)
		showActiveDot()
		}, 3500)
		
		createDot()
		showActiveDot()
		
		hidePage(domVariables.signUpContinue)
		
		domVariables.signUpPage.querySelectorAll('input').forEach((el) => el.value = "")
		domVariables.signUpContinue.querySelectorAll('input').forEach((el) => el.value = "")
		
		
		})
		
		//SIGN IN PASSWORD HIDE
		domVariables.signInPasswordShow.addEventListener('click', function(){
		
		if(!domVariables.signInPasswordShow.classList.contains('check')){
		
		domVariables.signInPasswordEl.type = 'text'
		domVariables.signInPasswordShow.innerHTML =`<i class="fa-solid fa-lock fa-xs"></i>`
		domVariables.signInPasswordShow.classList.add('check')
		
		}else{
		
		domVariables.signInPasswordEl.type = 'password'
		domVariables.signInPasswordShow.innerHTML =`<i class="fa-regular fa-eye fa-xs"></i>`
		domVariables.signInPasswordShow.classList.remove('check')
		
		}
		})
		
		//SIGN UP PASSWORD 1 HIDE
		domVariables.signUpPasswordShow1.addEventListener('click', function(){
		
		if(!domVariables.signUpPasswordShow1.classList.contains('check')){
		
		domVariables.signUpPassword.type = 'text'
		domVariables.signUpPasswordShow1.innerHTML =`<i class="fa-solid fa-lock fa-xs"></i>`
		domVariables.signUpPasswordShow1.classList.add('check')
		
		}else{
		
		domVariables.signUpPassword.type = 'password'
		domVariables.signUpPasswordShow1.innerHTML =`<i class="fa-regular fa-eye fa-xs"></i>`
		domVariables.signUpPasswordShow1.classList.remove('check')
		
		}
		})
		
		//SIGN UP PASSWORD 2 HIDE
		domVariables.signUpPasswordShow2.addEventListener('click', function(){
		
		if(!domVariables.signUpPasswordShow2.classList.contains('check')){
		
		domVariables.signUpConfirmPassword.type = 'text'
		domVariables.signUpPasswordShow2.innerHTML =`<i class="fa-solid fa-lock fa-xs"></i>`
		domVariables.signUpPasswordShow2.classList.add('check')
		
		}else{
		
		domVariables.signUpConfirmPassword.type = 'password'
		domVariables.signUpPasswordShow2.innerHTML =`<i class="fa-regular fa-eye fa-xs"></i>`
		domVariables.signUpPasswordShow2.classList.remove('check')
		
		}
		})
		
		
		
		//SIGN UP
		
		domVariables.signUpPasswordShow1 
		domVariables.signUpPasswordShow2 
		
		
		
		
		
		
		
		//SIGNING IN
		
		domVariables.signInButtonEl.addEventListener('click', function(e){
		e.preventDefault()
		
		const email = toLowerCase(domVariables.signInEmailEl.value);
		const password = domVariables.signInPasswordEl.value;
		
		if(email.length < 1 || password.length < 1)return
		
		domVariables.signInEmailEl.value = "";
		domVariables.signInPasswordEl.value = "";
		
		currentAccount = accounts.find((acc) => acc.email === email);
		
		if(currentAccount?.password === password){
		
		hidePage(domVariables.signInContainer)
		
		domVariables.menuEl.classList.remove('hide')
		domVariables.menuEl.classList.remove('hide-menu-arrange')
		domVariables.menuEl.classList.add('show-menu-arrange')
		
		domVariables.historyShowEl.classList.remove('hide')
		domVariables.historyShowEl.classList.remove('show-history-arrange')
		domVariables.historyShowEl.classList.add('hide-history-arrange')
		
		localStorage.clear()
		setLocalStorage(accounts)
		
		
		
		
		
		displayHistory(currentAccount)
		
		showPage(domVariables.homeEl)
		configureProfilePage(currentAccount)
		
		
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		
		
		
		
		goToSlide(0)
		clearInterval(timer)
		curSlide = 0
		timer = setInterval(() => {curSlide < 7 ? curSlide++ : curSlide = 0
		goToSlide(curSlide)
		showActiveDot()
		}, 3500)
		
		createDot()
		showActiveDot()
		
		const savedAsset = currentAccount.transactions.filter((el) => el.status === 'active' && el.type === 'Smart Savings')
		
		savedAsset?.forEach((el) => {
		if(el.to.disburseDate <= Date.now()){
		if(currentBalance > +el.to.disburseAmount + 200){
		withdrawAmount = +el.to.disburseAmount
		
		withdrawAccount = {accountName : `UNIPAYS Disburse`,
		accountNumber : 'Disburse Account',
		bankName : 'UNIPAYS',}
		
		currentAccount.transactions.push(new TransactFund(createTransactDetails(currentAccount, withdrawAccount, withdrawAmount)));
		
		}
		}
		})
		
		const softLoan = currentAccount.transactions.find((el) => el.status === 'active' && el.type === 'Student Loan' && el.accName === 'Soft loan')
		if(softLoan?.from.repayDate <= Date.now()){
		
		if(currentBalance > softLoan?.from.amount + 200){
		withdrawAccount = +softLoan?.from.repayAmount - +softLoan?.from.amountPaid
		transactionType = 'Repay Soft Loan'
		const dataDetails = {
		accountNumber : 'UNIPAYS FINANCE',
		bankName : 'UNIPAYS',
		accountName : 'Repay Soft Loan',
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		
		
		
		
		const newTransactionTransfer = new TransactTransfer(dataToUse)
		
		currentAccount.transactions.push(newTransactionTransfer);
		
		if(currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.repayAmount !== withdrawAmount){
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.repayAmount -= withdrawAmount
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.amountPaid += withdrawAmount
		
		
		}else if(currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.repayAmount === withdrawAmount){
		
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.repayAmount -= withdrawAmount
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.amountPaid += withdrawAmount
		
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').status = 'paid'
		currentAccount.maxSoftLoan += (currentAccount.maxSoftLoan * 0.4)
		
		}
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		}
		
		}
		
		}
		})
		
		
		
		
		
		domVariables.hideBalanceEl.addEventListener('click', function(){
		if(!domVariables.hideBalanceEl.classList.contains('check')){
		domVariables.homeBalanceEl.textContent = '****'
		domVariables.hideBalanceEl.innerHTML =`<i class="fa-regular fa-eye fa-xs"></i>`
		
		
		domVariables.hideBalanceEl.classList.add('check')
		}else{
		updateBalance(currentBalance)
		domVariables.hideBalanceEl.innerHTML =`<i class="fa-solid fa-lock fa-xs"></i>`
		
		domVariables.hideBalanceEl.classList.remove('check')
		}
		
		})
		
		
		//PROFILE PIC
		
		domVariables.changeProfilePic.addEventListener('change', function(){
		currentAccount.profilePic = URL.createObjectURL(domVariables.changeProfilePic.files[0])
		
		domVariables.profilePic.forEach((el) => {if(currentAccount.profilePic === ''){
		el.innerHTML = `<i class="fa-solid fa-user fa-2xl"></i>`
		}else{
		el.src = currentAccount.profilePic
		el.innerHTML = `<img class="profile-pic-image network-img" src="${currentAccount.profilePic}">`
		}
		})
		
		localStorage.clear()
		setLocalStorage(accounts)
		
		})
		
		
		
		domVariables.toHistoryEl.addEventListener('click', function(){
		
		
		
		domVariables.homeEl.classList.remove('show')
		domVariables.homeEl.classList.add('hide-history-arrange')
		
		
		domVariables.historyShowEl.classList.remove('hide-history-arrange')
		
		domVariables.historyShowEl.classList.add('show-history-arrange')
		
		
		displayHistory(currentAccount)
		
		
		
		
		
		})
		
		
		
		domVariables.historyToHomeEl.addEventListener('click', function(){
		
		
		domVariables.homeEl.classList.add('show')
		domVariables.homeEl.classList.remove('hide-history-arrange')
		domVariables.historyShowEl.classList.add('hide-history-arrange')
		domVariables.historyShowEl.classList.remove('show-history-arrange')
		
		
		
		})
		
		//LOAN HISTORY
		domVariables.toLoanHistory.addEventListener('click', function(){
		hideHome()
		
		domVariables.loanHistoryContainer.innerHTML = ""
		
		currentAccount.transactions.filter((el) => el.type === 'Student Loan').forEach((el) => {
		
		const html = `<div class="transaction-history">
		
		<div class="details-container">
		
		<div class="details-arrange"><p>Loan Type :</p> <span>${el.accName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Creditor :</p> <span >${el.accNo}</span></div>
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Amount Borrowed :</p> <span>&#8358;${el.from.amount}</span></div>
		<div class="details-arrange"><p>Amount Payable :</p> <span>&#8358;${el.from.repayAmount + el.from.amountPaid}</span></div>
		<div class="details-arrange"><p>Due Date :</p> <span>${new Date(el.from.repayDate).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})}</span></div>
		<div class="details-arrange"><p>Amount Paid :</p> <span>&#8358;${el.from.amountPaid}</span></div>
		<div class="details-arrange"><p>Amount Left :</p> <span>&#8358;${el.from.repayAmount}</span></div>
		
		<div class="details-arrange"><p>Loan Status :</p> <span>${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.from.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.loanHistoryContainer.insertAdjacentHTML('afterbegin', html)
		
		
		})
		
		
		
		
		
		
		
		showPage(domVariables.loanHistoryPage)
		hidePage(domVariables.homeEl)
		
		
		})
		
		domVariables.loanHistoryBack.addEventListener('click', function(){
		hidePage(domVariables.loanHistoryPage)
		showPage(domVariables.homeEl)
		
		})
		
		//TOTAL ASSETS 
		domVariables.toTotalAssets.addEventListener('click', function(){
		hideMainAreaContent()
		hideProfilePages()
		hideHome()
		
		const savings = currentAccount.transactions.filter((el) => el.type === 'Smart Savings')
		const savingsTotal = savings.reduce((sum, trans) => sum + trans.to.receiverAccNo, 0)
		
		domVariables.totalAssetsMainBalance.textContent = formatNumber(savingsTotal + currentBalance)
		
		savings.forEach((el) => {
		
		const html = `
		<div class="student-loan-amount-container">
		<p class="heading">Smart Savings<p>
		
		<div class="details-arrange"><p class="config-arrange" >Saved Amount :</p> <div><span>&#8358;</span><span >${Math.abs(el.to.amount)}</span></div></div>
		<div class="details-arrange"><p class="config-arrange" >Disburse Amount :</p> <div><span>&#8358;</span><span >${el.to.receiverAccNo}</span></div></div>
		
		<div class="button loan-main-btn">
		<button class="sign-in-btn">${new Date(el.to.receiverAccName).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})}</button>
		</div>
		</div>
		`
		
		domVariables.totalAssetsSavingsContainer.insertAdjacentHTML('afterbegin', html)
		})
		
		domVariables.menuEl.classList.remove('show-menu-arrange')
		domVariables.menuEl.classList.add('hide-menu-arrange')
		
		hidePage(domVariables.homeEl)
		
		showPage(domVariables.totalAssetsPage)
		
		
		
		
		
		
		})
		
		
		domVariables.totalAssetsBack.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		
		domVariables.menuEl.classList.add('show-menu-arrange')
		domVariables.menuEl.classList.remove('hide-menu-arrange')
		
		
		hidePage(domVariables.totalAssetsPage)
		
		})
		
		
		
		
		
		
		
		
		
		
		
		//ADD ACCOUNT PAGE
		
		
		domVariables.toAddBankPage.addEventListener('click', function(){
		hideProfilePages()
		hideHome()
		hideMainAreaContent()
		domVariables.addBankPageBtn.textContent = 'Add account'
		
		showPage(domVariables.addBankPage)
		hidePage(domVariables.homeEl)
		
		domVariables.menuEl.classList.remove('show-menu-arrange')
		domVariables.menuEl.classList.add('hide-menu-arrange')
		
		})
		
		domVariables.addBankPageBack.addEventListener('click', function(){
		
		hidePage(domVariables.addBankPage)
		showPage(domVariables.homeEl)
		
		domVariables.menuEl.classList.add('show-menu-arrange')
		domVariables.menuEl.classList.remove('hide-menu-arrange')
		
		})
		
		
		domVariables.addBankPageBtn.addEventListener('click', function(){
		currentAccount.accountNumber = +domVariables.addBankPageNumber.value
		currentAccount.accountName = domVariables.addBankPageName.value
		currentAccount.bankName = domVariables.addBankPageBank.value.toLowerCase()
		
		domVariables.addBankPageBtn.textContent = 'Account added'
		setTimeout(() => {
		
		hidePage(domVariables.addBankPage)
		showPage(domVariables.homeEl)
		
		domVariables.menuEl.classList.add('show-menu-arrange')
		domVariables.menuEl.classList.remove('hide-menu-arrange')
		
		
		}, 1500)
		
		localStorage.clear()
		setLocalStorage(accounts)
		
		
		})
		
		
		
		//SEARCH TRANSACTIONS
		domVariables.toSearchTransactions.addEventListener('click', function(){
		hideHome()
		
		domVariables.searchTransactionsContainer.innerHTML = ""
		hidePage(domVariables.homeEl)
		showPage(domVariables.searchTransactionsPage)
		
		})
		
		domVariables.searchTransactionsBack.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		hidePage(domVariables.searchTransactionsPage)
		
		})
		
		domVariables.searchTransactionsBtn.addEventListener('click', function(){
		
		domVariables.searchTransactionsContainer.innerHTML = ""
		const id = domVariables.searchTransactionsInput.value.toUpperCase()
		domVariables.searchTransactionsInput.value = ""
		
		currentAccount.transactions.forEach((el) => {if(el.type === 'Food Tickets' && el.to.id === id){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Account Name :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Restautant Name :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Venue :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Number of Tickets :</p> <span>${el.to.ticketNo}</span></div>
		<div class="details-arrange"><p>Ticket Amount :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.ticketNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		
		domVariables.searchTransactionsContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}
		
		
		
		else if(el.type === 'Transport Tickets' && el.to.id === id){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Number Of Tickets :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Destination :</p> <span>${el.to.ticketNo}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Transport Type :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Ticket Amount :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.receiverAccNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.searchTransactionsContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}else if((el.type === 'withdrawal' && el.to.id === id) || (el.type === 'transfer' && el.to.id === id)){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Account Name :</p> <span>${el.to.receiverAccName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Account Number :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${Math.abs(el.to.amount)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.searchTransactionsContainer.insertAdjacentHTML('afterbegin', html)
		
		}
		else if(el.type === 'receive' && el.from.id === id || el.type === 'Fund account' && el.from.id === id){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Account Name :</p> <span>${el.accName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Account Number :</p> <span >${el.accNo}</span></div>
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${el.from.amount}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.from.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.searchTransactionsContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}
		else if(el.type === 'Buy Data' && el.to.id === id){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Data Quantity :</p> <span>${el.to.receiverAccName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Phone Number :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Network :</p> <span>${el.to.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${Math.abs(el.to.amount)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.searchTransactionsContainer.insertAdjacentHTML('afterbegin', html)
		
		}
		else if(el.type === 'Pay School Fees' && el.to.id === id || el.type === 'Pay Hostel Fees' && el.to.id === id){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Account Name:</p> <span>${el.to.receiverAccName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Account Number :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Payment Type :</p> <span >${el.to.paymentType}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${Math.abs(el.to.amount)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.searchTransactionsContainer.insertAdjacentHTML('afterbegin', html)
		
		}
		else if(el.type === 'Buy Books' && el.to.id === id){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Number Of Books :</p> <span >${el.to.receiverAccNo}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Name Of Book :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Amount Of Book :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.receiverAccNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.searchTransactionsContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}
		else if(el.type === 'Student Loan' && el.from.id === id){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Loan Type :</p> <span>${el.accName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Creditor :</p> <span >${el.accNo}</span></div>
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${el.from.amount}</span></div>
		<div class="details-arrange"><p>Repayment Amount :</p> <span>&#8358;${el.from.repayAmount}</span></div>
		<div class="details-arrange"><p>Due Date :</p> <span>${new Date(el.from.repayDate).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})}</span></div>
		
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.from.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.searchTransactionsContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}
		else if(el.type === 'Smart Savings' && el.to.id === id){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Disbursement Date :</p> <span>${new Date(el.to.receiverAccName).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})}</span></div>
		<div class="details-arrange"><p>Repayment Amount :</p> <span >&#8358;${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName.toUpperCase()}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${Math.abs(el.to.amount)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.searchTransactionsContainer.insertAdjacentHTML('afterbegin', html)
		}
		else if(el.type === 'Buy Airtime'){
		
		const html = `<div class="transaction-history">
		<p>${el.type.toUpperCase()}</p>
		<div class="details-container">
		
		<div class="details-arrange"><p>Airtime Amount :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Phone Number :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Network :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Transaction amount :</p> <span>&#8358;${Math.abs(el.to.amount)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>`
		
		domVariables.searchTransactionsContainer.insertAdjacentHTML('afterbegin', html)
		
		}
		
		})
		
		
		})
		
		
		
		//USE ACTIVE TICKETS
		
		domVariables.toUseActiveTicketPage.addEventListener('click', function(){
		hideHome()
		showPage(domVariables.useActiveTicketPage)
		hidePage(domVariables.homeEl)
		domVariables.toUseActiveTicketBtn.textContent = 'Find Ticket'
		domVariables.toUseActiveTicketContainer.innerHTML = ""
		
		})
		
		domVariables.useActiveTicketPageBack.addEventListener('click', function(){
		hidePage(domVariables.useActiveTicketPage)
		showPage(domVariables.homeEl)
		
		})
		
		domVariables.toUseActiveTicketBtn.addEventListener('click', function(){
		
		//	domVariables.toUseActiveTicketContainer.textContent = "yes"
		const searchAccounts = accounts.filter ((el) => el !== currentAccount)
		let activeTransactions = []
		searchAccounts.forEach((el) => {
		
		activeTransactions = [...activeTransactions, ...el.transactions.filter((el) => el.status === 'active' )]
		
		})
		
		if(domVariables.toUseActiveTicketBtn.textContent === 'Find Ticket'){
		
		const id = domVariables.useActiveTicketInput.value.toUpperCase()
		
		domVariables.useActiveTicketInput.value = ""
		
		activeTransactions.forEach((el) => {if(el.type === 'Food Tickets' && el.to.id === id && el.status === 'active'){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Account Name :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Restautant Name :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Venue :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Number of Tickets :</p> <span>${el.to.ticketNo}</span></div>
		<div class="details-arrange"><p>Ticket Amount :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.ticketNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.toUseActiveTicketContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}else if(el.type === 'Buy Books'  && el.to.id === id && el.status === 'active'){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Number Of Books :</p> <span >${el.to.receiverAccNo}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Name Of Book :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Amount Of Book :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.receiverAccNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.toUseActiveTicketContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}else if(el.type === 'Transport Tickets' && el.to.id === id && el.status === 'active'){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Number Of Tickets :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Destination :</p> <span>${el.to.ticketNo}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Transport Type :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Ticket Amount :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.receiverAccNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.toUseActiveTicketContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}
		
		})
		domVariables.toUseActiveTicketBtn.textContent = 'Use Ticket'
		
		}
		else if(domVariables.toUseActiveTicketBtn.textContent === 'Use Ticket'){
		localStorage.clear()
		setLocalStorage(accounts)
		
		
		
		activeTransactions.forEach((el) => {if(el.status === 'active' && el.type === 'Food Tickets'){
		el.status = 'used'
		
		domVariables.toUseActiveTicketContainer.innerHTML = ""
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Account Name :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Restautant Name :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Venue :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Number of Tickets :</p> <span>${el.to.ticketNo}</span></div>
		<div class="details-arrange"><p>Ticket Amount :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.ticketNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.toUseActiveTicketContainer.insertAdjacentHTML('afterbegin', html)
		
		}else if(el.type === 'Buy Books' && el.status === 'active'){
		el.status = 'used'
		
		domVariables.toUseActiveTicketContainer.innerHTML = ""
		
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Number Of Books :</p> <span >${el.to.receiverAccNo}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Name Of Book :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Amount Of Book :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.receiverAccNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.toUseActiveTicketContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}
		else if(el.type === 'Transport Tickets' && el.status === 'active'){
		
		el.status = 'used'
		
		domVariables.toUseActiveTicketContainer.innerHTML = ""
		
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Number Of Tickets :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Destination :</p> <span>${el.to.ticketNo}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Transport Type :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Ticket Amount :</p> <span>&#8358;${Math.abs(el.to.amount / el.to.receiverAccNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.toUseActiveTicketContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}
		
		
		
		
		withdrawAmount = Math.abs(el.to.amount)
		
		const dataDetails = {
		accountName : 'YES',
		bankName : 'UNIPAYS',
		accountNumber : 'UNIPAYS FINANCE',
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, +withdrawAmount)
		
		
		currentAccount.transactions.push(new TransactTicket(dataToUse));
		console.log(currentAccount.transactions)
		
		
		currentBalance = calcBalance(currentAccount)		
		updateBalance(currentBalance)
		
		})
		setTimeout(() => {
		hidePage(domVariables.useActiveTicketPage)
		showPage(domVariables.homeEl)
		}, 1500)
		}
		
		})
		
		
		
		
		//IMPLEMENTING WITHDRAWAL
		
		
		//MOVE TO WITHDRAW PAGE
		
		domVariables.toWithdraw.addEventListener('click', function(){
		hideHome()
		transactionType = 'withdrawal';
		
		clearInputs()
		
		domVariables.withdrawTypeOfTransactEl.textContent = transactionType
		hidePage(domVariables.homeEl)
		showPage(domVariables.withdrawPage1El)
		
		})
		
		// BACK TO HOME
		
		domVariables.withdrawBack1El.addEventListener('click', function(){
		clearInputs()
		hidePage(domVariables.withdrawPage1El)
		showPage(domVariables.homeEl)
		
		})
		
		
		//SHOW ACCOUNT
		domVariables.withdrawBankEl.addEventListener('focus', function(){
		domVariables.withdrawAccNameEl.textContent = 'Please enter details';
		
		domVariables.withdrawAccNoEl.value = "";
		hidePage(domVariables.nameSpinner)
		showPage(domVariables.withdrawAccNameEl)
		/*	showPage(nameSpinner)
		hidePage(withdrawAccNameEl)*/
		
		})
		
		domVariables.withdrawAccNoEl.addEventListener('keyup', function(){
		if(domVariables.withdrawAccNoEl.value.length >= 1 && domVariables.withdrawBankEl.value.length >= 3){
		showPage(domVariables.nameSpinner)
		hidePage(domVariables.withdrawAccNameEl)
		}
		
		const bankName = toLowerCase(domVariables.withdrawBankEl.value)
		if(domVariables.withdrawAccNoEl.value.length === 0 || bankName.length === 0 ){
		domVariables.withdrawAccNameEl.textContent = 'Please enter details';
		}
		
		if(domVariables.withdrawAccNoEl.value.length === 4){
		
		withdrawAccount = accounts.find((acc) => acc.accountNumber === +domVariables.withdrawAccNoEl.value)
		}
		
		if(domVariables.withdrawAccNoEl.value.length === 4 && withdrawAccount?.bankName === bankName ){
		setTimeout(() => {domVariables.withdrawAccNameEl.textContent = withdrawAccount.accountName
		hidePage(domVariables.nameSpinner)
		showPage(domVariables.withdrawAccNameEl)
		}, 500);
		
		
		}
		if(domVariables.withdrawAccNoEl.value.length === 4 && withdrawAccount?.bankName !== bankName || domVariables.withdrawAccNoEl.value.length === 4 && withdrawAccount === undefined){
		setTimeout(() => {domVariables.withdrawAccNameEl.textContent = 'Incorrect Details';
		hidePage(domVariables.nameSpinner)
		showPage(domVariables.withdrawAccNameEl)
		}, 500);
		
		}
		})
		
		//TO AMOUNT PAGE
		domVariables.withdrawButton1El.addEventListener('click', function(){
		if(withdrawAccount === currentAccount){
		
		
		
		
		domVariables.withdrawAccNameEl.textContent = "You cannot withdraw to yourself"
		domVariables.withdrawBankEl.value = ""
		domVariables.withdrawAccNoEl.value = ""
		}else{
		
		domVariables.withdrawAccNameEl.textContent = ""
		domVariables.withdrawBankEl.value = ""
		domVariables.withdrawAccNoEl.value = ""
		
		hidePage(domVariables.withdrawPage1El)
		showPage(domVariables.withdrawPage2El)
		}
		})
		
		
		//BACK TO WITHDRAW FIRST PAGE
		domVariables.withdrawBack2El.addEventListener('click', function(){
		if(transactionType === 'Unipays Transfer'){
		showPage(domVariables.unipaysPage)
		hidePage(domVariables.withdrawPage2El)
		}else{
		
		hidePage(domVariables.withdrawPage2El)
		showPage(domVariables.withdrawPage1El)
		}
		
		
		})
		
		//TO PIN PAGE
		
		domVariables.withdrawButton2El.addEventListener('click', function(){
		
		
		if(transactionType === 'transfer' || transactionType === 'withdrawal' ){
		pinPageDisplay({toName : 'Account Name',
		toNumber : 'Account Number',
		organization : 'Bank Name',}
		)
		withdrawAmount = +domVariables.withdrawAmountEl.value;
		
		transactionDetails = {
		type : transactionType,
		accName : withdrawAccount.accountName,
		accNo : withdrawAccount.accountNumber,
		bankName : withdrawAccount.bankName ,
		amount : withdrawAmount,
		
		}
		
		updatePinPage(transactionDetails)
		
		}else if(transactionType === 'Unipays Transfer'){
		pinPageDisplay({toName : 'Student Name',
		toNumber : 'Matric Number',
		organization : 'Bank Name',}
		)
		withdrawAmount = +domVariables.withdrawAmountEl.value;
		
		transactionDetails = {
		type : transactionType,
		accName : `${withdrawAccount.firstName} ${withdrawAccount.lastName}`,
		accNo : withdrawAccount.matricNo,
		bankName : 'UNIPAYS' ,
		amount : withdrawAmount,
		}
		
		
		updatePinPage(transactionDetails)
		
		}
		
		if(transactionType === 'Unipays Transfer' || transactionType === 'transfer'){
		domVariables.withdrawButton3El.textContent = "Transfer"
		}
		hidePage(domVariables.withdrawPage2El)
		showPage(domVariables.withdrawPage3El)
		
		
		
		domVariables.withdrawAmountEl.value = ""
		})
		
		//BACK TO WITHDRAW 2ND PAGE
		domVariables.withdrawBack3El.addEventListener('click', function(){
		
		if(transactionType === 'withdrawal' || transactionType === 'transfer'|| transactionType === 'Unipays Transfer'){
		
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage2El)
		
		}else if(transactionType === 'data'){
		
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.dataPageEl)
		
		}else if(transactionType === 'Hostel Fees'){
		
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.hostelPage)
		
		}else if(transactionType === 'Repay Tuition Loan' || transactionType === 'Repay Soft Loan' ){
		
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.repayLoanPage)
		
		}
		else if(transactionType === 'Smart Savings'){
		
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.savingsPage)
		
		}
		else if(transactionType === 'airtime'){
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.airtimePageEl)
		
		}else if(transactionType === 'Buy Books'){
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.bookPage)
		
		}else if(transactionType === 'school fees'){
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.toSchoolFeesPageEl)
		
		}else if(transactionType === 'Food Tickets'){
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.foodContinueEl)
		
		}else if(transactionType === 'Student loan'){
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.loanContinuePageEl)
		
		}else if(transactionType === 'Transport Tickets'){
		
		showPage(domVariables.transportPage)
		hidePage(domVariables.withdrawPage3El)
		}
		domVariables.withdrawPinEl.value = ''
		hidePage(domVariables.pinErrorEl)
		})
		
		//TO SUCCESS PAGE
		domVariables.withdrawButton3El.addEventListener('click', function(){
		
		let newTransactionWithdraw;
		
		if(currentAccount?.pin === +domVariables.withdrawPinEl.value){
		
		if(transactionType === 'withdrawal' || transactionType === 'transfer' ){
		if((transactionType === 'withdrawal' && withdrawAmount > 100 && currentBalance > withdrawAmount + 200) || (transactionType === 'transfer' && withdrawAmount > 100 && currentBalance > withdrawAmount + 200)){
		
		domVariables.pinErrorEl.textContent = '';
		if(transactionType === 'withdrawal'){
		
		const dataDetails = {
		accountNumber : currentAccount.matricNo,
		bankName : 'UNIPAYS',
		accountName : `${currentAccount.firstName} ${currentAccount.lastName}`,
		}
		
		newTransactionWithdraw = new TransactWithdrawal(createTransactDetails(currentAccount, withdrawAccount, withdrawAmount))
		currentAccount.transactions.push(newTransactionWithdraw);
		withdrawAccount.transactions.push(new TransactReceiver(createTransactDetails(withdrawAccount, dataDetails, withdrawAmount)));
		
		}else if(transactionType === 'transfer'){
		
		const dataDetails = {
		accountNumber : currentAccount.matricNo,
		bankName : 'UNIPAYS',
		accountName : `${currentAccount.firstName} ${currentAccount.lastName}`,
		}
		
		newTransactionWithdraw = new TransactTransfer(createTransactDetails(currentAccount, withdrawAccount, withdrawAmount))
		currentAccount.transactions.push(newTransactionWithdraw);
		withdrawAccount.transactions.push(new TransactReceiver(createTransactDetails(withdrawAccount, dataDetails, withdrawAmount)));
		
		
		}
		
		configSuccessPage({name : 'Account Name',
		number : 'Account Number',
		nameBank : 'Bank Name',
		amount : 'Amount',})
		
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		displaySuccess(newTransactionWithdraw)
		
		}else if(withdrawAmount < 100){
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Amount should be greater than 100';
		
		}else if(currentBalance < withdrawAmount + 200){
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		}else if(transactionType === 'Food Tickets'){
		
		if(currentBalance > withdrawAmount && withdrawAmount >= 200){
		
		const dataDetails = {
		accountNumber : restaurantName,
		bankName : restaurantVenue,
		accountName : 'UNIPAYS FOOD',
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		const newTransactionFees = new TransactFood(dataToUse, ticketNumber)
		
		currentAccount.transactions.push(newTransactionFees);
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		
		configSuccessPage({name : 'Account Name',
		number : 'Restaurant',
		nameBank : 'Venue',
		amount : 'Amount',})
		
		
		displaySuccess(newTransactionFees)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}
		
		
		}else if(transactionType === 'Transport Tickets'){
		
		if(currentBalance > withdrawAmount ){
		
		const dataDetails = {
		accountNumber : ticketNumber,
		bankName : 'UNIPAYS',
		accountName : transportType.toUpperCase(),
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		const newTransactionFees = new TransactTransport(dataToUse, destinationTransport)
		
		currentAccount.transactions.push(newTransactionFees);
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		
		configSuccessPage({name : 'TransportType',
		number : 'Number of Tickets',
		nameBank : 'Bank Name',
		amount : 'Amount',})
		
		
		displaySuccess(newTransactionFees)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}
		else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		
		}else if(transactionType === 'Unipays Transfer'){
		
		if(currentBalance > withdrawAmount + 200){
		
		const dataDetails2 = {
		accountNumber : withdrawAccount.matricNo,
		bankName : 'UNIPAYS',
		accountName : `${withdrawAccount.firstName} ${withdrawAccount.lastName}`,
		}
		
		
		const dataDetails1 = {
		accountNumber : currentAccount.matricNo,
		bankName : 'UNIPAYS',
		accountName : `${currentAccount.firstName} ${currentAccount.lastName}`,
		}
		
		const dataToUse = createTransactDetails(dataDetails1, dataDetails2, withdrawAmount)
		
		
		
		
		const newTransactionTransfer = new TransactTransfer(dataToUse)
		
		currentAccount.transactions.push(newTransactionTransfer);
		withdrawAccount.transactions.push(new TransactReceiver(createTransactDetails(dataDetails2, dataDetails1, withdrawAmount)));
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		
		configSuccessPage({name : 'Student Name',
		number : 'Matric Number',
		nameBank : 'Bank Name',
		amount : 'Amount',})
		
		
		displaySuccess(newTransactionTransfer)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}
		else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		
		}
		else if(transactionType === 'Repay Tuition Loan'){
		
		if(currentBalance > withdrawAmount + 200){
		
		const dataDetails = {
		accountNumber : 'UNIPAYS FINANCE',
		bankName : 'UNIPAYS',
		accountName : 'Repay Tuition Loan',
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		
		
		
		
		const newTransactionTransfer = new TransactTransfer(dataToUse)
		
		currentAccount.transactions.push(newTransactionTransfer);
		
		if(currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Tuition loan').from.repayAmount !== withdrawAmount){
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Tuition loan').from.repayAmount -= withdrawAmount
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Tuition loan').from.amountPaid += withdrawAmount
		
		
		}else if(currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Tuition loan').from.repayAmount === withdrawAmount){
		
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Tuition loan').from.repayAmount -= withdrawAmount
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Tuition loan').from.amountPaid += withdrawAmount
		
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Tuition loan').status = 'paid'
		
		
		}
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		
		configSuccessPage({name : 'Payment Type',
		number : 'Account Number',
		nameBank : 'Bank Name',
		amount : 'Amount',})
		
		
		displaySuccess(newTransactionTransfer)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}
		else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		
		}else if(transactionType === 'Repay Soft Loan'){
		
		if(currentBalance > withdrawAmount + 200){
		
		const dataDetails = {
		accountNumber : 'UNIPAYS FINANCE',
		bankName : 'UNIPAYS',
		accountName : 'Repay Soft Loan',
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		
		
		
		
		const newTransactionTransfer = new TransactTransfer(dataToUse)
		
		currentAccount.transactions.push(newTransactionTransfer);
		
		if(currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.repayAmount !== withdrawAmount){
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.repayAmount -= withdrawAmount
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.amountPaid += withdrawAmount
		
		
		}else if(currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.repayAmount === withdrawAmount){
		
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.repayAmount -= withdrawAmount
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.amountPaid += withdrawAmount
		
		currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').status = 'paid'
		currentAccount.maxSoftLoan += (currentAccount.maxSoftLoan * 0.4)
		
		}
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		
		configSuccessPage({name : 'Payment Type',
		number : 'Account Number',
		nameBank : 'Bank Name',
		amount : 'Amount',})
		
		
		displaySuccess(newTransactionTransfer)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}
		else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		
		}
		else if(transactionType === 'Buy Books'){
		
		if(currentBalance > withdrawAmount ){
		
		const dataDetails = {
		accountNumber : bookNumber,
		bankName : 'UNIPAYS',
		accountName : bookName,
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		const newTransactionFees = new TransactBooks(dataToUse)
		
		currentAccount.transactions.push(newTransactionFees);
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		
		configSuccessPage({name : 'Name Of Book',
		number : 'Number of Books',
		nameBank : 'Bank Name',
		amount : 'Amount',})
		
		
		displaySuccess(newTransactionFees)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}
		else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		
		}
		
		else if(transactionType === 'Smart Savings'){
		
		if(currentBalance > withdrawAmount + 200){
		const dataDetails = {
		accountName : new Date(disburseDate).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'}),
		bankName : 'UNIPAYS',
		accountNumber : +disburseAmount.toFixed(2),
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		const newTransactionFees = new TransactSavings(dataToUse)
		
		currentAccount.transactions.push(newTransactionFees);
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		
		configSuccessPage({name : 'Disburse Date',
		number : 'Disburse Amount',
		nameBank : 'Bank Name',
		amount : 'Save Amount',})
		
		
		displaySuccess(newTransactionFees)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		}else if(transactionType === 'Student loan'){
		if(loanType === 'Soft loan'){
		if(currentAccount.maxSoftLoan >= withdrawAmount){
		const dataDetails = {
		accountName : loanType,
		bankName : 'UNIPAYS',
		accountNumber : 'UNIPAYS FINANCE',
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		const newTransactionFees = new TransactLoan(dataToUse, loanDay, loanRepayAmount)
		
		currentAccount.transactions.push(newTransactionFees);
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		configSuccessPage({name : 'Loan Type',
		number : 'Account Number',
		nameBank : 'Bank Name',
		amount : 'Amount',})
		
		
		currentAccount.softLoanRepaymentDate = loanDay
		
		
		
		displaySuccessReceive(newTransactionFees)
		
		
		
		/*	currentBalance += withdrawAmount
		updateBalance(currentBalance);*/
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Loan allowed exceeded';
		}
		}else if(loanType === 'Tuition loan'){
		const dataDetails = {
		accountName : loanType,
		bankName : 'UNIPAYS',
		accountNumber : 'UNIPAYS FINANCE',
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		const newTransactionFees = new TransactLoan(dataToUse, tuitionLoanDay, loanRepayAmount)
		
		currentAccount.transactions.push(newTransactionFees);
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		configSuccessPage({name : 'Loan Type',
		number : 'Account Number',
		nameBank : 'Bank Name',
		amount : 'Amount',})
		
		
		currentAccount.softLoanRepaymentDate = tuitionLoanDay
		
		
		
		displaySuccessReceive(newTransactionFees)
		
		
		
		/*	currentBalance += withdrawAmount
		updateBalance(currentBalance);*/
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		
		}
		}else if(transactionType === 'school fees'){
		if(currentBalance > withdrawAmount + 200){
		const dataDetails = {
		accountName : 'UI',
		bankName : 'UNIPAYS',
		accountNumber : formatSchoolFee(schoolFeeType),
		}
		
		let paymentType;
		
		configSuccessPage({name : 'Account Name',
		number : 'Fee',
		nameBank : 'Bank Name',
		amount : 'Amount',})
		
		if(currentAccount.schoolFees.schoolFeeInstallmentType === 1 && currentAccount.schoolFees.installment === false){
		currentAccount.schoolFees.paymentMade = 0
		currentAccount.schoolFees.schoolFeesPaidPartially = []
		const newFeesPaid = [...currentAccount.schoolFees.schoolFeesPaidTotally, ...arrayToLowerCase(schoolFeeType)]
		currentAccount.schoolFees.schoolFeesPaidTotally = newFeesPaid
		
		domVariables.schoolFeesSelectorAll.forEach((el) => {
		if(currentAccount.schoolFees.schoolFeesPaidTotally.includes(el.querySelector('.fee-type').textContent.toLowerCase())){
		el.classList.add('fees-paid-container')
		el.querySelector('.services-type-icon').classList.add('paid-fees')
		paymentType = 'Full Payment'
		
		}
		})
		
		}
		else{
		currentAccount.schoolFees.paymentMade += withdrawAmount
		paymentType = 'Installments'
		currentAccount.schoolFees.schoolFeesPaidPartially = [...schoolFeeType]
		currentAccount.schoolFees.installment = true
		
		}
		
		if(currentAccount.schoolFees.paymentMade >= currentAccount.schoolFees.schoolFeesTotalAmount && currentAccount.schoolFees.schoolFeeInstallmentType > 1 && currentAccount.schoolFees.installment === true){
		
		paymentType = 'Final Installment'
		
		
		domVariables.schoolFeesSelectorAll.forEach((el) =>{
		el.classList.add('fees-paid-container')
		el.querySelector('.services-type-icon').classList.add('paid-fees')
		})
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		const newTransactionFees = new TransactSchoolFees(dataToUse, paymentType)
		
		currentAccount.transactions.push(newTransactionFees);
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		
		
		displaySuccess(newTransactionFees)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		}else if(transactionType === 'Hostel Fees'){
		if(currentBalance > withdrawAmount + 200){
		const dataDetails = {
		accountName : 'UI',
		bankName : 'UNIPAYS',
		accountNumber : formatSchoolFee(hostelFeeType),
		}
		
		let paymentType;
		
		
		
		configSuccessPage({name : 'Account Name',
		number : 'Fee',
		nameBank : 'Bank Name',
		amount : 'Amount',})
		
		if(currentAccount.hostelFees.hostelFeeInstallmentType === 1 && currentAccount.hostelFees.installment === false){
		currentAccount.hostelFees.paymentMade = 0
		currentAccount.hostelFees.hostelFeesPaidPartially = []
		const newFeesPaid = [...currentAccount.hostelFees.hostelFeesPaidTotally, ...arrayToLowerCase(hostelFeeType)]
		currentAccount.hostelFees.hostelFeesPaidTotally = newFeesPaid
		
		paymentType = "Full Payment"
		
		domVariables.hostelFeesAll.forEach((el) => {
		if(currentAccount.hostelFees.hostelFeesPaidTotally.includes(el.querySelector('.fee-type').textContent.toLowerCase())){
		el.classList.add('fees-paid-container')
		el.querySelector('.services-type-icon').classList.add('paid-fees')
		}
		})
		
		}
		else{
		currentAccount.hostelFees.paymentMade += withdrawAmount
		paymentType = 'Installments'
		currentAccount.hostelFees.hostelFeesPaidPartially = [...hostelFeeType]
		currentAccount.hostelFees.installment = true
		}
		
		if(currentAccount.hostelFees.paymentMade >= currentAccount.hostelFees.hostelFeesTotalAmount && currentAccount.hostelFees.hostelFeeInstallmentType > 1 && currentAccount.hostelFees.installment === true){
		
		paymentType = 'Final Installment'
		
		domVariables.hostelFeesAll.forEach((el) =>{
		el.classList.add('fees-paid-container')
		el.querySelector('.services-type-icon').classList.add('paid-fees')
		})
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		const newTransactionFees = new TransactHostelFees(dataToUse, paymentType)
		
		currentAccount.transactions.push(newTransactionFees);
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		
		displaySuccess(newTransactionFees)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		}else if(transactionType === 'data'){
		if(currentBalance > withdrawAmount + 200){
		const dataDetails = {
		accountName : dataQuantity,
		bankName : network,
		accountNumber : phoneNumber,
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		const newTransactionData = new TransactData(dataToUse)
		
		currentAccount.transactions.push(newTransactionData);
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		configSuccessPage({name : 'Data Quantity',
		number : 'Phone Number',
		nameBank : 'Network',
		amount : 'Amount',})
		
		
		displaySuccess(newTransactionData)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		}
		else if(transactionType === 'airtime'){
		
		if(currentBalance > withdrawAmount + 200){
		const dataDetails = {
		accountName : feesAmount,
		bankName : network,
		accountNumber : phoneNumber,
		}
		
		const dataToUse = createTransactDetails(currentAccount, dataDetails, withdrawAmount)
		const newTransactionFees = new TransactAirtime(dataToUse)
		
		currentAccount.transactions.push(newTransactionFees);
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		displayHistory(currentAccount)
		
		
		configSuccessPage({name : 'Airtime',
		number : 'Phone Number',
		nameBank : 'Network',
		amount : 'Amount',})
		
		
		displaySuccess(newTransactionFees)
		hidePage(domVariables.withdrawPage3El)
		showPage(domVariables.withdrawPage4El)
		
		}else{
		
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Insufficient balance';
		
		}
		}
		}else{
		showPage(domVariables.pinErrorEl)
		domVariables.pinErrorEl.textContent = 'Incorrect pin';
		}
		
		
		domVariables.withdrawPinEl.value = ''
		
		localStorage.clear()
		setLocalStorage(accounts)
		
		
		
		//	setLocalStorage(accounts)
		})
		
		//BACK TO WITHDRAW FIRST PAGE
		domVariables.withdrawBack4El.addEventListener('click', function(){
		if(transactionType === 'transfer' || transactionType === 'withdrawal'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.withdrawPage1El)
		
		}else if(transactionType === 'data'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.homeEl)
		
		}
		else if(transactionType === 'Unipays Transfer'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.unipaysPage)
		
		}else if(transactionType === 'Repay Tuition Loan' || transactionType === 'Repay Soft Loan'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.homeEl)
		
		}
		else if(transactionType === 'Hostel Fees'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.homeEl)
		
		}else if(transactionType === 'Transport Tickets'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.homeEl)
		
		}
		else if(transactionType === 'Student loan'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.homeEl)
		
		}
		else if(transactionType === 'school fees'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.homeEl)
		
		
		}
		else if(transactionType === 'Smart Savings'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.homeEl)
		
		
		}else if(transactionType === 'Buy Books'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.homeEl)
		
		
		}
		else if(transactionType === 'airtime'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.homeEl)
		
		}
		
		else if(transactionType === 'Food Tickets'){
		clearFees()
		clearInputs()
		hidePage(domVariables.withdrawPage4El)
		showPage(domVariables.homeEl)
		
		}
		hidePage(domVariables.pinErrorEl)
		})
		
		
		//SHOWMENU
		domVariables.showMenu.addEventListener('click', function(){
		domVariables.menuEl.style.transition = 'all 0.5s linear'
		domVariables.menuEl.classList.add('showMenuSlide')
		domVariables.menuEl.classList.remove('hideMenuSlide')
		})
		
		//CLOSEMENU
		domVariables.closeMenu.addEventListener('click', function(){
		domVariables.menuEl.classList.add('hideMenuSlide')
		domVariables.menuEl.classList.remove('showMenuSlide')
		})
		
		//SIGNOUT
		domVariables.signOut.addEventListener('click', function(){
		clearInterval(timer)
		domVariables.menuEl.classList.add('hideMenuSlide')
		domVariables.menuEl.classList.remove('showMenuSlide')
		
		
		localStorage.clear()
		setLocalStorage(accounts)
		hideMainAreaContent()
		hideHome()
		hideProfilePages()
		clearFees()
		clearInputs()
		
		domVariables.menuEl.style.transition = 'none'
		
		document.querySelectorAll('.show-history-arrange').forEach((el) => el.classList.remove('show-history-arrange'))
		document.querySelectorAll('.show-menu-arrange').forEach((el) => el.classList.remove('show-menu-arrange'))
		document.querySelectorAll('.hide-history-arrange').forEach((el) => el.classList.remove('hide-history-arrange'))
		document.querySelectorAll('.hide-menu-arrange').forEach((el) => el.classList.remove('hide-menu-arrange'))
		
		domVariables.homeEl.classList.add('hide')
		domVariables.homeEl.classList.remove('show')
		domVariables.homeEl.classList.remove('hide-history-arrange')
		domVariables.homeEl.classList.remove('show-history-arrange')
		domVariables.homeEl.classList.remove('hide-menu-arrange')
		domVariables.homeEl.classList.remove('show-menu-arrange')
		
		
		
		//	document.querySelectorAll('.show').forEach((el) => hidePage(el))
		
		hidePage(domVariables.menuEl)
		hidePage(domVariables.historyShowEl)
		
		showPage(domVariables.signInContainer)
		
		
		})
		
		
		
		
		
		domVariables.withdrawSuggestContainerEl.addEventListener('click', function(e){
		const clicked = e.target.closest('.amount-suggestion');
		
		if(!clicked)return;
		domVariables.withdrawSuggestAllEl.forEach((t) => t.style.backgroundColor = "var(--BG-COLOR-LIGHT-1)");
		clicked.style.backgroundColor = "var(--BRAND-BUTTON)";
		
		domVariables.withdrawAmountEl.value = +clicked.querySelector('.suggest').dataset.amount;
		})
		
		//CHANGE MODE
		domVariables.changeModeContainer.addEventListener('click', function(e){
		
		const clicked = e.target.closest('.mode-toggle');
		if(!clicked.classList.contains('selected')){
		clicked.querySelector('.change-mode').classList.add('change-mode-toggle');
		domVariables.rootEl.style.setProperty('--TEXT-COLOR-LIGHT', 'white')
		domVariables.rootEl.style.setProperty('--BG-COLOR-LIGHT-PRIMARY', 'black')
		domVariables.rootEl.style.setProperty('--BG-COLOR-LIGHT-1', 'rgb(52, 58, 64)')
		domVariables.rootEl.style.setProperty('--OUTLINE-LIGHT', '1px solid white')
		domVariables.rootEl.style.setProperty('--LINKER-COLOR', 'rgb(240, 185, 11)')
		
		document.querySelectorAll('.brand-logo').forEach((el) => {
		el.src = "Images/unipays4.png"
		})
		domVariables.welcomeImage.src = "Images/unipays3.png"
		
		clicked.classList.add('selected')
		
		}else{
		
		clicked.querySelector('.change-mode').classList.remove('change-mode-toggle');
		domVariables.rootEl.style.setProperty('--TEXT-COLOR-LIGHT', 'black')
		domVariables.rootEl.style.setProperty('--BG-COLOR-LIGHT-PRIMARY', 'white')
		domVariables.rootEl.style.setProperty('--BG-COLOR-LIGHT-1', 'rgb(234, 236, 239)')
		domVariables.rootEl.style.setProperty('--OUTLINE-LIGHT', '1px solid black')
		domVariables.rootEl.style.setProperty('--LINKER-COLOR', 'rebeccapurple')
		
		document.querySelectorAll('.brand-logo').forEach((el) => {
		el.src = "Images/unipays2.png"
		})
		domVariables.welcomeImage.src = "Images/unipays1.png"
		
		clicked.classList.remove('selected')
		}
		
		})
		
		//CHANGE PROFILE
		domVariables.profileChangeBtn.addEventListener('click', function(){
		
		currentAccount.firstName = domVariables.profileFirstNameEl.value;
		currentAccount.lastName = domVariables.profileLastNameEl.value;
		currentAccount.email = domVariables.profileEmailEl.value;
		currentAccount.phoneNo = domVariables.profilePhoneNumberEl.value;
		currentAccount.department = domVariables.profileDepartmentEl.value;
		currentAccount.matricNo = domVariables.profileMatricNoEl.value;
		
		configureProfilePage(currentAccount)
		
		localStorage.clear()
		setLocalStorage(accounts)
		
		})
		
		//DATA PAGE
		domVariables.toDataPageEl.addEventListener('click', function(){
		hideHome()
		transactionType = 'data';
		domVariables.dataWrapEl.querySelectorAll('.data-amount-wrapper').forEach((el) => el.style.backgroundColor = 'var(--BG-COLOR-LIGHT-1)')
		
		networkValue = 0;
		clearInputs()
		hidePage(domVariables.homeEl)
		showPage(domVariables.dataPageEl)
		})
		
		domVariables.dataBack1El.addEventListener('click', function(){
		clearInputs()
		hidePage(domVariables.dataPageEl)
		showPage(domVariables.homeEl)
		
		})
		
		domVariables.dataTypeContainer.addEventListener('click', function(e){
		let type;
		
		
		const typeEl = domVariables.dataTypeContainer.querySelectorAll('.data-difference')
		
		const clicked = e.target.closest('.data-type')
		if(!clicked)return
		
		typeEl.forEach((el) => {
		el.classList.toggle('move-up');
		el.querySelector('span').classList.toggle('show')
		el.querySelector('span').classList.toggle('hide')
		})
		if(domVariables.dataTypeContainer.querySelector('.move-up').dataset.type === 'academics'){
		
		hidePage(domVariables.dataGeneralEl)
		showPage(domVariables.dataAcademicsEl)
		}else if(domVariables.dataTypeContainer.querySelector('.move-up').dataset.type === 'general'){
		
		hidePage(domVariables.dataAcademicsEl)
		showPage(domVariables.dataGeneralEl)
		
		}
		})
		
		
		
		//DATA SUGGESTION
		domVariables.dataWrapEl.addEventListener('click', function(e){
		
		domVariables.dataWrapEl.querySelectorAll('.data-amount-wrapper').forEach((el) => el.style.backgroundColor = 'var(--BG-COLOR-LIGHT-1)')
		
		const clicked = e.target.closest('.data-suggestion')
		if(!clicked)return
		
		clicked.querySelector('.data-amount-wrapper').style.backgroundColor = 'rgb(173, 181, 189)'
		
		feesAmount = +clicked.querySelector('.data-amount').dataset.amount;
		
		//	feesAmount = 20
		
		dataQuantity = clicked.querySelector('.data-qty').textContent;
		
		})
		
		domVariables.dataNetworkTypeIncrease.addEventListener('click', function(){
		if(networkValue < 3){
		networkValue++
		}else{
		networkValue = 0
		}
		domVariables.dataNetworkType.textContent = networksAvailable[networkValue].name
		domVariables.dataNetworkImageContainer.innerHTML = `<img class="network-img"  src="Images/${networksAvailable[networkValue].img}">`
		})
		
		
		
		
		
		
		
		//	domVariables.dataInputEl.value 
		//DATA TO PIN PAGE
		domVariables.dataButtonEl.addEventListener('click', function(){
		
		
		
		
		withdrawAmount = feesAmount
		phoneNumber = domVariables.dataInputEl.value;
		network = domVariables.dataNetworkType.textContent
		if(phoneNumber.length !== 11){
		showPage(domVariables.dataError2)
		hidePage(domVariables.dataError1)
		}
		else if(withdrawAmount < 20){
		showPage(domVariables.dataError1)
		hidePage(domVariables.dataError2)
		}
		else if(phoneNumber.length !== 11 && withdrawAmount < 20){
		showPage(domVariables.dataError1)
		showPage(domVariables.dataError2)
		}else{
		hidePage(domVariables.dataError1)
		hidePage(domVariables.dataError2)
		
		
		
		
		
		pinPageDisplay({toName : 'Data',
		toNumber : 'Phone Number',
		organization : 'Network',}
		)
		
		
		
		transactionDetails = {
		type : transactionType,
		accName : dataQuantity,
		accNo : phoneNumber,
		bankName : network,
		amount : withdrawAmount,
		}
		
		domVariables.dataInputEl.value = ""
		updatePinPage(transactionDetails)
		domVariables.withdrawButton3El.textContent = "buy"
		
		hidePage(domVariables.dataPageEl)
		showPage(domVariables.withdrawPage3El)
		
		}
		
		
		
		})
		
		//TO BANK
		domVariables.toBankEl.addEventListener('click', function(){
		hideHome()
		transactionType = 'transfer';
		
		clearInputs()
		
		domVariables.withdrawTypeOfTransactEl.textContent = transactionType
		hidePage(domVariables.homeEl)
		showPage(domVariables.withdrawPage1El)
		
		})
		
		//TO AIRTIME
		domVariables.toAirtimePageEl.addEventListener('click', function(){
		hideHome()
		
		domVariables.airtimeSuggestionContainerEl.querySelectorAll('.data-amount-wrapper').forEach((el) => el.style.backgroundColor = 'var(--BG-COLOR-LIGHT-1)')
		
		transactionType = 'airtime';
		networkValue = 0;
		clearInputs()
		hidePage(domVariables.homeEl)
		showPage(domVariables.airtimePageEl)
		})
		
		domVariables.airtimeToHomeEl.addEventListener('click', function(){
		clearInputs()
		hidePage(domVariables.airtimePageEl)
		showPage(domVariables.homeEl)
		
		})
		
		//AIRTIME SUGGESTIONS
		domVariables.airtimeSuggestionContainerEl.addEventListener('click', function(e){
		domVariables.airtimeSuggestionContainerEl.querySelectorAll('.data-amount-wrapper').forEach((el) => el.style.backgroundColor = 'var(--BG-COLOR-LIGHT-1)')
		
		
		const clicked = e.target.closest('.data-suggestion')
		if(!clicked)return
		
		feesAmount = +clicked.querySelector('.data-amount').dataset.amount;
		clicked.querySelector('.data-amount-wrapper').style.backgroundColor = 'rgb(173, 181, 189)'
		
		discount = +clicked.querySelector('.duration').dataset.duration;
		
		})
		
		domVariables.airtimeNetworkIncrease.addEventListener('click', function(){
		if(networkValue < 3){
		networkValue++
		}else{
		networkValue = 0
		}
		domVariables.airtimeNetworkType.textContent = networksAvailable[networkValue].name
		domVariables.airtimeNetworkImageContainer.innerHTML = `<img class="network-img"  src="Images/${networksAvailable[networkValue].img}">`
		})
		
		
		
		//AIRTIME TO PIN PAGE
		domVariables.airtimeButtonEl.addEventListener('click', function(){
		
		
		
		phoneNumber = domVariables.airtimePhoneNumberEl.value;
		const airtimeInput = +domVariables.airtimeAmountEl.value;
		feesAmount !==0 ? feesAmount : feesAmount = airtimeInput
		
		withdrawAmount = feesAmount - discount
		
		
		
		if(phoneNumber.length !== 11){
		
		showPage(domVariables.feesError2)
		hidePage(domVariables.feesError1)
		
		}else if(withdrawAmount < 20){
		
		showPage(domVariables.feesError1)
		hidePage(domVariables.feesError2)
		
		}else if(phoneNumber.length !== 11 && withdrawAmount < 20){
		
		showPage(domVariables.feesError1)
		showPage(domVariables.feesError2)
		
		}
		else{
		
		hidePage(domVariables.feesError1)
		hidePage(domVariables.feesError2)
		
		
		hidePage(domVariables.airtimePageEl)
		showPage(domVariables.withdrawPage3El)
		
		network = domVariables.airtimeNetworkType.textContent
		
		pinPageDisplay({toName : 'Airtime',
		toNumber : 'Phone Number',
		organization : 'Network',}
		)
		
		
		
		transactionDetails = {
		type : transactionType,
		accName : feesAmount,
		accNo : phoneNumber,
		bankName : network,
		amount : withdrawAmount,
		}
		
		domVariables.airtimePhoneNumberEl.value = ""
		domVariables.airtimeAmountEl.value = ""
		updatePinPage(transactionDetails)
		domVariables.airtimeButtonEl.textContent = "buy"
		
		
		}
		
		})
		
		//HOSTEL
		
		domVariables.toHostelPage.addEventListener('click', function(){
		hideHome()
		
		hidePage(domVariables.homeEl)
		showPage(domVariables.hostelPage)
		
		feesAmount = 0
		hostelFeeType = []
		
		transactionType = "Hostel Fees"
		domVariables.hostelButtonText.textContent = ""
		
		domVariables.hostelFeesAll.forEach((el) => {
		el.querySelector('.services-type-icon').classList.remove('selected')
		el.querySelector('.services-type-icon').innerHTML = ""
		el.classList.remove('fees-paid-container')
		el.querySelector('.services-type-icon').classList.remove('paid-fees')
		
		})
		
		domVariables.hostelDueDate.textContent = ""
		domVariables.hostelAmountLeft.innerHTML = ""
		domVariables.hostelAmountPaid.innerHTML = ""
		
		
		if(currentAccount.hostelFees.paymentMade >= currentAccount.hostelFees.hostelFeesTotalAmount && currentAccount.hostelFees.hostelFeeInstallmentType > 1 && currentAccount.hostelFees.installment === true){
		
		
		
		domVariables.hostelFeesAll.forEach((el) =>{
		el.classList.add('fees-paid-container')
		el.querySelector('.services-type-icon').classList.add('paid-fees')
		})
		}
		
		const hostelAll = domVariables.hostelFeeDataType.querySelectorAll('.data-difference')
		
		hostelAll.forEach((el) => {
		
		el.classList.remove('move-up')
		el.querySelector('span').classList.remove('show')
		el.querySelector('span').classList.add('hide')
		
		
		})
		
		const current = domVariables.hostelFeeDataType.querySelector(`[data-time="${currentAccount.hostelFees.hostelFeeInstallmentType}"]`)
		current.classList.add('move-up')
		current.querySelector('span').classList.add('show')
		current.querySelector('span').classList.remove('hide')
		
		if(currentAccount.hostelFees.hostelFeeInstallmentType > 1){
		feesAmount = Math.ceil(currentAccount.hostelFees.hostelFeesTotalAmount / currentAccount.hostelFees.hostelFeeInstallmentType)
		showPage(domVariables.hostelFeeInstallDetails)
		
		}else if(currentAccount.hostelFees.hostelFeeInstallmentType === 1){
		hidePage(domVariables.hostelFeeInstallDetails)
		}
		domVariables.hostelButtonEl.innerHTML = currentAccount.hostelFees.paymentMade >= currentAccount.hostelFees.hostelFeesTotalAmount && currentAccount.hostelFees.installment === true ? '<span>Paid Totally</span>' : `<span>Pay &#8358;${Math.ceil(currentAccount.hostelFees.hostelFeesTotalAmount / currentAccount.hostelFees.hostelFeeInstallmentType)}</span>`
		//		domVariables.hostelButtonText.textContent = 1
		hostelFeeType = currentAccount.hostelFees.hostelFeesPaidPartially
		
		domVariables.hostelFeesAll.forEach((el) => {
		if(currentAccount.hostelFees.hostelFeesPaidTotally.includes(el.querySelector('.fee-type').textContent.toLowerCase())){
		el.querySelector('.services-type-icon').innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		
		el.classList.add('fees-paid-container')
		el.querySelector('.services-type-icon').classList.add('paid-fees')
		}
		})
		
		
		if(currentAccount.hostelFees.hostelFeeInstallmentType !==1){
		domVariables.hostelAmountPaid.innerHTML = `<span>&#8358;${currentAccount.hostelFees.paymentMade}</span>`
		domVariables.hostelAmountLeft.innerHTML = `<span>&#8358;${currentAccount.hostelFees.hostelFeesTotalAmount - currentAccount.hostelFees.paymentMade}</span>`;
		
		
		
		
		const firstPaymentDate = currentAccount.hostelFees.firstDate
		const numberPaid = Math.round(currentAccount.hostelFees.paymentMade / (currentAccount.hostelFees.hostelFeesTotalAmount / currentAccount.hostelFees.hostelFeeInstallmentType))
		
		
		const day = (32 / (currentAccount.hostelFees.hostelFeeInstallmentType - 1)) * numberPaid * 7
		
		if(currentAccount.hostelFees.paymentMade >= currentAccount.hostelFees.hostelFeesTotalAmount && currentAccount.hostelFees.hostelFeeInstallmentType > 1 && currentAccount.hostelFees.installment === true){
		domVariables.hostelDueDate.textContent = ""
		domVariables.hostelAmountLeft.innerHTML = `<span>&#8358;0</span>`
		
		}else{
		domVariables.hostelAmountLeft.innerHTML = `<span>&#8358;${currentAccount.hostelFees.hostelFeesTotalAmount - currentAccount.hostelFees.paymentMade}</span>`;
		
		domVariables.hostelDueDate.textContent = `${new Date(firstPaymentDate + (day * 24 * 3600 * 1000)).toLocaleDateString('en-GB', {month:'short', weekday:'short', day:'numeric', year:'numeric'})}` 
		}
		}
		
		
		
		
		})
		
		
		
		domVariables.hostelToHome.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		hidePage(domVariables.hostelPage)
		
		if(currentAccount.hostelFees.hostelFeeInstallmentType > 1 && +currentAccount.hostelFees.paymentMade === 0){
		currentAccount.hostelFees.hostelFeeInstallmentType = 1
		
		let fees = 0;
		domVariables.hostelFeesAll.forEach((el, i) => {
		if(!el.classList.contains('fees-paid-container')){
		el.querySelector('.services-type-icon').innerHTML = ``
		
		hostelFeeType = []
		fees = 0
		feesAmount = 0
		hidePage(domVariables.hostelFeeInstallDetails)
		}
		})
		
		}
		
		})
		
		
		domVariables.hostelFeeEl.addEventListener('click', function(e){
		
		//	const name = e.target.closest('.services-type-icon');
		const clicked = e.target.closest('.services-type-icon');
		if(!clicked)return
		if(!clicked.classList.contains('paid-fees')){
		if(currentAccount.hostelFees.hostelFeeInstallmentType === 1){
		if(!clicked.classList.contains('selected')){
		
		
		clicked.innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		feesAmount += +domVariables.hostelFeeEl.querySelector('.fee-amount').dataset.amount;
		hostelFeeType[0] = domVariables.hostelFeeEl.querySelector('.fee-type').textContent; 
		
		
		
		
		domVariables.hostelButtonEl.innerHTML = `Pay <span>&#8358;</span><span>${Math.round(feesAmount / (currentAccount.hostelFees.hostelFeeInstallmentType - currentAccount.hostelFees.paymentMade))}</span>`
		
		
		
		clicked.classList.add('selected')
		}else{
		
		
		
		clicked.innerHTML = ""
		feesAmount -= +domVariables.hostelFeeEl.querySelector('.fee-amount').dataset.amount;
		
		hostelFeeType[0] = ''
		
		domVariables.hostelButtonEl.innerHTML = `Pay <span>&#8358;</span><span>${Math.round(feesAmount / (currentAccount.hostelFees.hostelFeeInstallmentType - currentAccount.hostelFees.paymentMade))}</span>`
		
		
		clicked.classList.remove('selected')
		}
		}
		}
		})
		
		
		domVariables.hostelLevyEl.addEventListener('click', function(e){
		
		//	const name = e.target.closest('.services-type-icon');
		const clicked = e.target.closest('.services-type-icon');
		if(!clicked)return
		if(!clicked.classList.contains('paid-fees')){
		if(currentAccount.hostelFees.hostelFeeInstallmentType === 1){
		if(!clicked.classList.contains('selected')){
		
		
		clicked.innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		feesAmount += +domVariables.hostelLevyEl.querySelector('.fee-amount').dataset.amount;
		hostelFeeType[1] = domVariables.hostelLevyEl.querySelector('.fee-type').textContent; 
		
		domVariables.hostelButtonEl.innerHTML = `Pay <span>&#8358;</span><span>${Math.round(feesAmount / (currentAccount.hostelFees.hostelFeeInstallmentType - currentAccount.hostelFees.paymentMade))}</span>`
		
		
		
		clicked.classList.add('selected')
		}else{
		
		
		
		clicked.innerHTML = ""
		feesAmount -= +domVariables.hostelLevyEl.querySelector('.fee-amount').dataset.amount;
		
		hostelFeeType[1] = ''
		
		domVariables.hostelButtonEl.innerHTML = `Pay <span>&#8358;</span><span>${Math.round(feesAmount / (currentAccount.hostelFees.hostelFeeInstallmentType - currentAccount.hostelFees.paymentMade))}</span>`
		
		
		
		clicked.classList.remove('selected')
		}
		}
		}
		})
		
		
		domVariables.hostelFeeDataType.addEventListener('click', function(e){
		
		
		const all = domVariables.hostelFeeDataType.querySelectorAll('.data-difference')
		//	all.forEach((el) => el.classList.remove('move-up'))
		
		const clicked = e.target.closest('.data-difference')
		if(!clicked)return
		
		if(currentAccount.hostelFees.installment === true)return
		
		if(currentAccount.hostelFees.installment === false){
		hostelFeeType = []
		feesAmount = 0
		
		currentAccount.hostelFees.hostelFeeInstallmentType = clicked.dataset.time
		
		
		all.forEach((el) => { el.classList.remove('move-up')
		el.querySelector('span').classList.remove('show')
		el.querySelector('span').classList.add('hide')
		})
		clicked.classList.add('move-up')
		clicked.querySelector('span').classList.add('show')
		clicked.querySelector('span').classList.remove('hide')
		domVariables.hostelFeesAll.forEach((el) => {
		el.querySelector('.services-type-icon').classList.remove('selected')
		el.querySelector('.services-type-icon').innerHTML = ""
		})
		
		
		
		
		
		if(currentAccount.hostelFees.hostelFeeInstallmentType > 1){
		let fees = 0;
		domVariables.hostelFeesAll.forEach((el, i) => {
		if(!el.classList.contains('fees-paid-container')){
		el.querySelector('.services-type-icon').innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		
		hostelFeeType[i] = el.querySelector('.fee-type').textContent;
		fees += +el.querySelector('.fee-amount').dataset.amount;
		feesAmount += +el.querySelector('.fee-amount').dataset.amount;
		}
		})
		
		domVariables.hostelButtonEl.innerHTML = `Pay <span>&#8358;</span><span>${Math.ceil(feesAmount / (currentAccount.hostelFees.hostelFeeInstallmentType - currentAccount.hostelFees.paymentMade))}</span>`
		
		
		// domVariables.hostelButtonText.textContent = Math.ceil(feesAmount / (currentAccount.hostelFees.hostelFeeInstallmentType - currentAccount.hostelFees.paymentMade))
		
		//	domVariables.schoolFeesToPinEl.textContent = 
		currentAccount.hostelFees.hostelFeesTotalAmount = fees 
		currentAccount.hostelFees.firstDate = Date.now()
		
		}
		else{
		currentAccount.hostelFees.hostelFeesLeft = 0
		
		
		currentAccount.hostelFees.hostelFeeInstallmentType = 1
		}
		}
		
		localStorage.clear()
		setLocalStorage(accounts)
		
		
		})
		
		//HOSTEL FEES TO PIN
		domVariables.hostelButtonEl.addEventListener('click', function(){
		
		const feesPaid = currentAccount.hostelFees.hostelFeeInstallmentType === 1 ? Math.ceil(feesAmount / currentAccount.hostelFees.hostelFeeInstallmentType) : Math.ceil(currentAccount.hostelFees.hostelFeesTotalAmount / currentAccount.hostelFees.hostelFeeInstallmentType)
		withdrawAmount = currentAccount.hostelFees.paymentMade === currentAccount.schoolFees.hostelFeesTotalAmount && currentAccount.hostelFees.installment === true ? 0 : feesPaid
		
		
		if(currentAccount.hostelFees.paymentMade >= currentAccount.hostelFees.hostelFeesTotalAmount && currentAccount.hostelFees.installment === true){
		showPage(domVariables.hostelPage)
		hidePage(domVariables.withdrawPage3El)
		
		}
		else if(transactionType === 'Hostel Fees' && withdrawAmount > 0){
		hidePage(domVariables.hostelPage)
		showPage(domVariables.withdrawPage3El)
		
		
		
		
		pinPageDisplay({toName : 'Account Name',
		toNumber : 'Fee',
		organization : 'Bank Name',}
		)
		
		
		transactionDetails = {
		type : transactionType,
		accName : 'UI',
		accNo : formatSchoolFee(hostelFeeType),
		bankName : 'UI HOSTEL FEES',
		amount : withdrawAmount,
		}
		
		
		
		updatePinPage(transactionDetails)
		domVariables.withdrawButton3El.textContent ="Pay"
		
		
		}
		})
		
		
		
		
		
		
		
		
		
		//SCHOOL FEES
		domVariables.toSchoolFeesEl.addEventListener('click', function(){
		hideHome()
		hidePage(domVariables.homeEl)
		showPage(domVariables.toSchoolFeesPageEl)
		
		
		
		transactionType = 'school fees';
		feesAmount = 0;
		schoolFeeType = [];
		domVariables.schoolFeesToPinEl.innerHTML = ``
		
		domVariables.schoolFeesSelectorAll.forEach((el, i) => {
		el.querySelector('.services-type-icon').innerHTML = ``
		el.classList.remove('fees-paid-container')
		el.querySelector('.services-type-icon').classList.remove('paid-fees')
		el.querySelector('.services-type-icon').classList.remove('selected')
		})
		
		domVariables.schoolFeesAmountPaid.innerHTML = ""
		domVariables.schoolFeesAmountLeft.innerHTML = ""
		domVariables.schoolFeesNextPayment.textContent = ""
		
		if(currentAccount.schoolFees.paymentMade >= currentAccount.schoolFees.schoolFeesTotalAmount && currentAccount.schoolFees.schoolFeeInstallmentType > 1 && currentAccount.schoolFees.installment === true){
		
		
		
		domVariables.schoolFeesSelectorAll.forEach((el) =>{
		el.classList.add('fees-paid-container')
		el.querySelector('.services-type-icon').classList.add('paid-fees')
		})
		}
		
		const all = domVariables.schoolFeePaymentTypeEl.querySelectorAll('.data-difference')
		
		all.forEach((el) => {
		
		el.classList.remove('move-up')
		el.querySelector('span').classList.remove('show')
		el.querySelector('span').classList.add('hide')
		
		
		})
		
		const current = domVariables.schoolFeePaymentTypeEl.querySelector(`[data-time="${currentAccount.schoolFees.schoolFeeInstallmentType}"]`)
		current.classList.add('move-up')
		current.querySelector('span').classList.add('show')
		current.querySelector('span').classList.remove('hide')
		
		if(currentAccount.schoolFees.schoolFeeInstallmentType > 1){
		feesAmount = Math.ceil(currentAccount.schoolFees.schoolFeesTotalAmount / currentAccount.schoolFees.schoolFeeInstallmentType)
		showPage(domVariables.schoolFeeInstallDetails)
		}else if(currentAccount.schoolFees.schoolFeeInstallmentType === 1){
		hidePage(domVariables.schoolFeeInstallDetails)
		}
		domVariables.schoolFeesToPinEl.innerHTML = currentAccount.schoolFees.paymentMade >= currentAccount.schoolFees.schoolFeesTotalAmount && currentAccount.schoolFees.installment === true ? '<span>Paid Totally</span>' : `</span>Pay &#8358;${Math.ceil(currentAccount.schoolFees.schoolFeesTotalAmount / currentAccount.schoolFees.schoolFeeInstallmentType)}</span>`
		schoolFeeType = currentAccount.schoolFees.schoolFeesPaidPartially
		
		domVariables.schoolFeesSelectorAll.forEach((el) => {
		if(currentAccount.schoolFees.schoolFeesPaidTotally.includes(el.querySelector('.fee-type').textContent.toLowerCase())){
		el.querySelector('.services-type-icon').innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		
		el.classList.add('fees-paid-container')
		el.querySelector('.services-type-icon').classList.add('paid-fees')
		}
		})
		
		
		if(currentAccount.schoolFees.schoolFeeInstallmentType !==1){
		domVariables.schoolFeesAmountPaid.innerHTML = `<span>&#8358;${currentAccount.schoolFees.paymentMade}</span>`
		domVariables.schoolFeesAmountLeft.innerHTML = `<span>&#8358;${currentAccount.schoolFees.schoolFeesTotalAmount - currentAccount.schoolFees.paymentMade}</span>`;
		
		
		const firstPaymentDate = currentAccount.schoolFees.firstDate
		const numberPaid = Math.round(currentAccount.schoolFees.paymentMade / (currentAccount.schoolFees.schoolFeesTotalAmount / currentAccount.schoolFees.schoolFeeInstallmentType))
		
		
		const day = (32 / (currentAccount.schoolFees.schoolFeeInstallmentType - 1)) * numberPaid * 7
		
		if(currentAccount.schoolFees.paymentMade >= currentAccount.schoolFees.schoolFeesTotalAmount && currentAccount.schoolFees.schoolFeeInstallmentType > 1 && currentAccount.schoolFees.installment === true){
		domVariables.schoolFeesNextPayment.textContent = ""
		domVariables.schoolFeesAmountLeft.innerHTML = `<span>&#8358;0</span>`
		}else{
		
		domVariables.schoolFeesNextPayment.textContent = `${new Date(firstPaymentDate + (day * 24 * 3600 * 1000)).toLocaleDateString('en-GB', {month:'short', weekday:'short', day:'numeric', year:'numeric', })}` 
		domVariables.schoolFeesAmountLeft.innerHTML = `<span>&#8358;${currentAccount.schoolFees.schoolFeesTotalAmount - currentAccount.schoolFees.paymentMade}</span>`;
		
		}
		}
		
		
		
		
		
		
		
		})
		
		domVariables.schoolFeesToHomeEl.addEventListener('click', function(){
		hidePage(domVariables.toSchoolFeesPageEl)
		showPage(domVariables.homeEl)
		
		if(currentAccount.schoolFees.schoolFeeInstallmentType > 1 && +currentAccount.schoolFees.paymentMade === 0){
		currentAccount.schoolFees.schoolFeeInstallmentType = 1
		
		let fees = 0;
		domVariables.schoolFeesSelectorAll.forEach((el, i) => {
		if(!el.classList.contains('fees-paid-container')){
		el.querySelector('.services-type-icon').innerHTML = ``
		
		schoolFeeType = []
		fees = 0
		feesAmount = 0
		hidePage(domVariables.schoolFeeInstallDetails)
		}
		})
		
		}
		
		
		})
		
		//SCHOOL FEES TO PIN
		domVariables.schoolFeesToPinEl.addEventListener('click', function(){
		const feesPaid = currentAccount.schoolFees.schoolFeeInstallmentType === 1 ? Math.ceil(feesAmount / currentAccount.schoolFees.schoolFeeInstallmentType) : Math.ceil(currentAccount.schoolFees.schoolFeesTotalAmount / currentAccount.schoolFees.schoolFeeInstallmentType)
		withdrawAmount = currentAccount.schoolFees.paymentMade === currentAccount.schoolFees.schoolFeesTotalAmount && currentAccount.schoolFees.installment === true ? 0 : feesPaid
		
		
		if(currentAccount.schoolFees.paymentMade >= currentAccount.schoolFees.schoolFeesTotalAmount && currentAccount.schoolFees.installment === true){
		showPage(domVariables.toSchoolFeesPageEl)
		hidePage(domVariables.withdrawPage3El)
		
		}
		else if(withdrawAmount > 0 && transactionType === 'school fees'){
		hidePage(domVariables.toSchoolFeesPageEl)
		showPage(domVariables.withdrawPage3El)
		
		
		pinPageDisplay({toName : 'Account Name',
		toNumber : 'Fee',
		organization : 'Bank Name',}
		)
		
		transactionDetails = {
		type : transactionType,
		accName : 'UI',
		accNo : formatSchoolFee(schoolFeeType),
		bankName : 'UI SCHOOL FEES',
		amount : withdrawAmount,
		}
		
		
		
		updatePinPage(transactionDetails)
		domVariables.withdrawButton3El.textContent ="Pay"
		
		
		}
		})
		
		
		
		domVariables.schoolFeesSelectEl.addEventListener('click', function(e){
		
		//	const name = e.target.closest('.services-type-icon');
		const clicked = e.target.closest('.services-type-icon');
		if(!clicked)return
		if(!clicked.classList.contains('paid-fees')){
		if(currentAccount.schoolFees.schoolFeeInstallmentType === 1){
		if(!clicked.classList.contains('selected')){
		
		
		clicked.innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		feesAmount += +domVariables.schoolFeesSelectEl.querySelector('.fee-amount').dataset.amount;
		schoolFeeType[0] = domVariables.schoolFeesSelectEl.querySelector('.fee-type').textContent; 
		
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		clicked.classList.add('selected')
		}else{
		
		
		
		clicked.innerHTML = ""
		feesAmount -= +domVariables.schoolFeesSelectEl.querySelector('.fee-amount').dataset.amount;
		
		schoolFeeType[0] = ''
		
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		clicked.classList.remove('selected')
		}
		}
		}
		})
		
		domVariables.gesFeeSelectEl.addEventListener('click', function(e){
		
		//	const name = e.target.closest('.services-type-icon');
		const clicked = e.target.closest('.services-type-icon');
		if(!clicked)return
		if(!clicked.classList.contains('paid-fees')){
		if(currentAccount.schoolFees.schoolFeeInstallmentType === 1){
		if(!clicked.classList.contains('selected')){
		
		clicked.innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		feesAmount += +domVariables.gesFeeSelectEl.querySelector('.fee-amount').dataset.amount;
		schoolFeeType[1] = domVariables.gesFeeSelectEl.querySelector('.fee-type').textContent;
		
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		clicked.classList.add('selected')
		
		}else{
		
		
		clicked.innerHTML = ""
		feesAmount -= +domVariables.gesFeeSelectEl.querySelector('.fee-amount').dataset.amount;
		schoolFeeType[1] = ''
		
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		clicked.classList.remove('selected')
		}
		}
		}
		})
		
		domVariables.techFeeSelectEl.addEventListener('click', function(e){
		
		//	const name = e.target.closest('.services-type-icon');
		const clicked = e.target.closest('.services-type-icon');
		if(!clicked)return
		if(!clicked.classList.contains('paid-fees')){
		if(currentAccount.schoolFees.schoolFeeInstallmentType === 1){
		if(!clicked.classList.contains('selected')){
		
		clicked.innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		feesAmount += +domVariables.techFeeSelectEl.querySelector('.fee-amount').dataset.amount;
		schoolFeeType[2] = domVariables.techFeeSelectEl.querySelector('.fee-type').textContent;
		
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		clicked.classList.add('selected')
		
		}else{
		
		
		clicked.innerHTML = ""
		feesAmount -= +domVariables.techFeeSelectEl.querySelector('.fee-amount').dataset.amount;
		schoolFeeType[2] = '' 
		
		
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		clicked.classList.remove('selected')
		}
		}
		}
		})
		
		domVariables.utilityFeeSelectEl.addEventListener('click', function(e){
		
		//	const name = e.target.closest('.services-type-icon');
		const clicked = e.target.closest('.services-type-icon');
		if(!clicked)return
		if(!clicked.classList.contains('paid-fees')){
		if(currentAccount.schoolFees.schoolFeeInstallmentType === 1){
		if(!clicked.classList.contains('selected')){
		
		clicked.innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		feesAmount += +domVariables.utilityFeeSelectEl.querySelector('.fee-amount').dataset.amount;
		schoolFeeType[3] = domVariables.utilityFeeSelectEl.querySelector('.fee-type').textContent;
		
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		clicked.classList.add('selected')
		
		}else{
		
		
		clicked.innerHTML = ""
		feesAmount -= +domVariables.utilityFeeSelectEl.querySelector('.fee-amount').dataset.amount;
		const type = domVariables.utilityFeeSelectEl.querySelector('.fee-type').textContent;
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		schoolFeeType[3] = ''
		
		
		clicked.classList.remove('selected')
		}
		}
		}
		})
		
		domVariables.professionalFeeSelectEl.addEventListener('click', function(e){
		
		//	const name = e.target.closest('.services-type-icon');
		const clicked = e.target.closest('.services-type-icon');
		if(!clicked)return
		if(!clicked.classList.contains('paid-fees')){
		if(currentAccount.schoolFees.schoolFeeInstallmentType === 1){
		if(!clicked.classList.contains('selected')){
		
		clicked.innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		feesAmount += +domVariables.professionalFeeSelectEl.querySelector('.fee-amount').dataset.amount;
		schoolFeeType[4] = domVariables.professionalFeeSelectEl.querySelector('.fee-type').textContent;
		
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		clicked.classList.add('selected')
		
		}else{
		
		
		clicked.innerHTML = ""
		feesAmount -= +domVariables.professionalFeeSelectEl.querySelector('.fee-amount').dataset.amount;
		const type = domVariables.professionalFeeSelectEl.querySelector('.fee-type').textContent;
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		schoolFeeType[4] = ''
		
		clicked.classList.remove('selected')
		}
		}
		}
		})
		
		
		
		domVariables.schoolFeePaymentTypeEl.addEventListener('click', function(e){
		
		const all = domVariables.schoolFeePaymentTypeEl.querySelectorAll('.data-difference')
		//	all.forEach((el) => el.classList.remove('move-up'))
		
		const clicked = e.target.closest('.data-difference')
		if(!clicked )return
		if(currentAccount.schoolFees.installment === true)return
		
		if(currentAccount.schoolFees.installment === false){
		schoolFeeType = []
		feesAmount = 0
		currentAccount.schoolFees.schoolFeeInstallmentType = clicked.dataset.time
		all.forEach((el) => { el.classList.remove('move-up')
		el.querySelector('span').classList.remove('show')
		el.querySelector('span').classList.add('hide')
		})
		clicked.classList.add('move-up')
		clicked.querySelector('span').classList.add('show')
		clicked.querySelector('span').classList.remove('hide')
		domVariables.schoolFeesSelectorAll.forEach((el) => {
		el.querySelector('.services-type-icon').classList.remove('selected')
		el.querySelector('.services-type-icon').innerHTML = ""
		})
		
		
		
		
		if(currentAccount.schoolFees.schoolFeeInstallmentType > 1){
		let fees = 0;
		domVariables.schoolFeesSelectorAll.forEach((el, i) => {
		if(!el.classList.contains('fees-paid-container')){
		el.querySelector('.services-type-icon').innerHTML = `<i class="fa-solid fa-check fa-2xl"></i>`
		schoolFeeType[i] = el.querySelector('.fee-type').textContent;
		fees += +el.querySelector('.fee-amount').dataset.amount;
		feesAmount += +el.querySelector('.fee-amount').dataset.amount;
		}
		})
		
		domVariables.schoolFeesToPinEl.innerHTML = `<span> Pay &#8358;${Math.round(feesAmount / (currentAccount.schoolFees.schoolFeeInstallmentType - currentAccount.schoolFees.paymentMade))}</span>`
		
		//	domVariables.schoolFeesToPinEl.textContent = 
		currentAccount.schoolFees.schoolFeesTotalAmount = fees 
		currentAccount.schoolFees.firstDate = Date.now()
		
		}else{
		currentAccount.schoolFees.schoolFeesLeft = 0
		domVariables.schoolFeesToPinEl.innerHTML = `<span>Pay</span>`
		
		currentAccount.schoolFees.schoolFeeInstallmentType = 1
		}
		}
		//		domVariables.schoolFeesToPinEl.textContent = feesAmount
		
		localStorage.clear()
		setLocalStorage(accounts)
		
		
		})
		
		
		
		//EXCHANGE PAGE
		domVariables.toExchangePageEl.addEventListener('click', function(){
		hideHome()
		
		hidePage(domVariables.homeEl)
		showPage(domVariables.exchangePageEl)
		})
		
		domVariables.exchangeToHomeEl.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		hidePage(domVariables.exchangePageEl)
		})
		
		//TO PROFILE PAGE
		domVariables.toProfilePage.addEventListener('click', function(){
		hideHome()
		hideProfilePages()
		hideMainAreaContent()
		domVariables.menuEl.classList.remove('show-menu-arrange')
		domVariables.menuEl.classList.add('hide-menu-arrange')
		
		
		hidePage(domVariables.homeEl)
		showPage(domVariables.profilePageEl)
		})
		
		domVariables.toProfilePage2.addEventListener('click', function(){
		hideProfilePages()
		hideHome()
		hideMainAreaContent()
		domVariables.menuEl.classList.remove('show-menu-arrange')
		domVariables.menuEl.classList.add('hide-menu-arrange')
		
		
		hidePage(domVariables.homeEl)
		showPage(domVariables.profilePageEl)
		})
		
		
		domVariables.profilePageToMenu.addEventListener('click', function(){
		domVariables.menuEl.classList.add('show-menu-arrange')
		domVariables.menuEl.classList.remove('hide-menu-arrange')
		
		
		showPage(domVariables.homeEl)
		hidePage(domVariables.profilePageEl)
		})
		
		//TO LOAN PAGE
		
		domVariables.toLoanPage.addEventListener('click', function(){
		hideHome()
		
		transactionType = 'Student loan'
		
		
		
		
		//OWING SOFT LOAN
		let owedSoftLoan = currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan')
		
		if(owedSoftLoan){
		
		domVariables.loanContinueSoft.textContent = 'Repay Loan'
		domVariables.softLoanGivenAmount.textContent = `${owedSoftLoan.from.repayAmount}`
		
		}else{
		
		domVariables.loanContinueSoft.textContent = 'Request Loan'
		
		domVariables.softLoanGivenAmount.textContent = `${currentAccount.maxSoftLoan}`
		
		}
		
		
		
		
		//OWING TUITION
		let owedTuition = currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Tuition loan')
		
		if(owedTuition){
		
		domVariables.loanContinueTuition.textContent = 'Repay Loan'
		domVariables.tuitionGivenAmount.textContent = `${owedTuition.from.repayAmount}`
		
		}else{
		
		domVariables.loanContinueTuition.textContent = 'Request Loan'
		
		domVariables.tuitionGivenAmount.textContent = ""
		
		}
		hidePage(domVariables.homeEl)
		showPage(domVariables.loanPageEl)
		
		})
		
		domVariables.loanBack.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		hidePage(domVariables.loanPageEl)
		})
		
		domVariables.loanContinueTuition.addEventListener('click', function(){
		
		
		loanType = 'Tuition loan'
		if(domVariables.loanContinueTuition.textContent === 'Request Loan'){
		
		
		
		let fees = 0;
		domVariables.schoolFeesSelectorAll.forEach((el, i) => {
		fees += +el.querySelector('.fee-amount').dataset.amount;
		})
		
		domVariables.hostelFeesAll.forEach((el, i) => {
		fees += +el.querySelector('.fee-amount').dataset.amount;
		})
		
		
		domVariables.loanAskingAmount.value = fees
		feesAmount = fees
		domVariables.durationSelect.textContent = 36
		domVariables.loanDuration.textContent = `${domVariables.durationSelect.textContent} weeks`
		
		loanTuitionNow = Date.now()
		tuitionLoanDay = loanTuitionNow + (+domVariables.durationSelect.textContent * 7 * 24 * 3600 * 1000)
		tuitionRepaymentDueDate = new Date(tuitionLoanDay).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})
		
		domVariables.loanRepaymentDate.textContent = tuitionRepaymentDueDate
		loanRepayAmount = +fees * 1.05
		
		domVariables.loanRepaymentAmount.textContent = loanRepayAmount
		
		
		
		
		
		
		showPage(domVariables.loanContinuePageEl)
		hidePage(domVariables.loanPageEl)
		}else if(domVariables.loanContinueTuition.textContent === 'Repay Loan'){
		transactionType = 'Repay Tuition Loan'
		
		showPage(domVariables.repayLoanPage)
		hidePage(domVariables.loanPageEl)
		
		}
		})
		
		
		domVariables.loanAskingAmount.addEventListener('keyup', function(){
		
		domVariables.loanRepaymentAmount.textContent = Math.round(+domVariables.loanAskingAmount.value * 1.2)
		
		})
		
		domVariables.repayLoanPageBack.addEventListener('click', function(){
		
		hidePage(domVariables.repayLoanPage)
		showPage(domVariables.loanPageEl)
		
		
		})
		
		
		domVariables.loanDurationIncrease.addEventListener('click', function(){
		if(loanType === 'Soft loan'){
		if(+domVariables.durationSelect.textContent >= 8)return
		domVariables.durationSelect.textContent = +domVariables.durationSelect.textContent + 1
		domVariables.loanDuration.textContent = `${domVariables.durationSelect.textContent} weeks`
		
		loanDay = loanNow + (+domVariables.durationSelect.textContent * 7 * 24 * 3600 * 1000)
		repaymentDate = new Date(loanDay).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})
		domVariables.loanRepaymentDate.textContent = repaymentDate
		
		
		
		}else if(loanType === 'Tuition loan'){
		if(+domVariables.durationSelect.textContent >= 36)return
		domVariables.durationSelect.textContent = +domVariables.durationSelect.textContent + 1
		domVariables.loanDuration.textContent = `${domVariables.durationSelect.textContent} weeks`
		
		tuitionLoanDay = loanTuitionNow + (+domVariables.durationSelect.textContent * 7 * 24 * 3600 * 1000)
		tuitionRepaymentDueDate = new Date(tuitionLoanDay).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})
		
		domVariables.loanRepaymentDate.textContent = tuitionRepaymentDueDate
		
		
		
		}
		})
		
		domVariables.loanDurationDecrease.addEventListener('click', function(){
		if(loanType === 'Soft loan'){
		if(+domVariables.durationSelect.textContent <= 2)return
		domVariables.durationSelect.textContent = +domVariables.durationSelect.textContent - 1
		domVariables.loanDuration.textContent = `${domVariables.durationSelect.textContent} weeks`
		loanDay = loanDay - (7 * 24 * 3600 * 1000)
		repaymentDate = new Date(loanDay).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})
		domVariables.loanRepaymentDate.textContent = repaymentDate
		
		}else if(loanType === 'Tuition loan'){
		
		if(+domVariables.durationSelect.textContent <= 16)return
		domVariables.durationSelect.textContent = +domVariables.durationSelect.textContent - 1
		domVariables.loanDuration.textContent = `${domVariables.durationSelect.textContent} weeks`
		
		tuitionLoanDay = tuitionLoanDay - (7 * 24 * 3600 * 1000)
		tuitionRepaymentDueDate = new Date(tuitionLoanDay).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})
		
		domVariables.loanRepaymentDate.textContent = tuitionRepaymentDueDate
		
		
		
		}
		})
		
		domVariables.loanContinueSoft.addEventListener('click', function(){
		loanType = 'Soft loan'
		if(domVariables.loanContinueSoft.textContent === 'Request Loan'){
		
		
		
		domVariables.loanAskingAmount.value = currentAccount.maxSoftLoan
		domVariables.loanDuration.textContent = `${domVariables.durationSelect.textContent} weeks`
		loanRepayAmount = +domVariables.loanAskingAmount.value * 1.2
		
		domVariables.loanRepaymentAmount.textContent = loanRepayAmount
		
		
		
		
		loanNow = Date.now()
		loanDay = loanNow + (+domVariables.durationSelect.textContent * 7 * 24 * 3600 * 1000)
		repaymentDate = new Date(loanDay).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})
		domVariables.loanRepaymentDate.textContent = repaymentDate
		
		showPage(domVariables.loanContinuePageEl)
		hidePage(domVariables.loanPageEl)
		
		}else if(domVariables.loanContinueSoft.textContent === 'Repay Loan'){
		transactionType = 'Repay Soft Loan'
		
		showPage(domVariables.repayLoanPage)
		hidePage(domVariables.loanPageEl)
		
		}
		
		})
		
		
		domVariables.loanContinueBack.addEventListener('click', function(){
		hidePage(domVariables.loanContinuePageEl)
		showPage(domVariables.loanPageEl)
		})
		
		
		domVariables.loanMainBtn.addEventListener('click', function(){
		hidePage(domVariables.loanContinuePageEl)
		showPage(domVariables.withdrawPage3El)
		
		pinPageDisplay({toName : 'Account Name',
		toNumber : 'Loan Type',
		organization : 'Bank Name',}
		)
		
		
		
		if(loanType === 'Soft loan'){
		loanRepayDate = repaymentDate
		
		withdrawAmount = +domVariables.loanAskingAmount.value
		
		transactionDetails = {
		type : transactionType,
		accName : 'UNIPAYS FINANCE',
		accNo : loanType,
		bankName : 'UNIPAYS',
		amount : withdrawAmount,
		}
		
		
		
		
		}else if(loanType === 'Tuition loan'){
		loanRepayDate = tuitionRepaymentDueDate
		
		withdrawAmount = feesAmount
		
		transactionDetails = {
		type : transactionType,
		accName : 'UNIPAYS FINANCE',
		accNo : loanType,
		bankName : 'UNIPAYS',
		amount : withdrawAmount,
		}
		
		}
		localStorage.clear()
		setLocalStorage(accounts)
		
		
		updatePinPage(transactionDetails)
		domVariables.withdrawButton3El.textContent ="Get Loan"
		
		})
		
		domVariables.repayLoanBtn.addEventListener('click', function(){
		
		
		
		
		pinPageDisplay({toName : 'Account Name',
		toNumber : 'Loan Type',
		organization : 'Bank Name',}
		)
		
		
		
		if(loanType === 'Soft loan'){
		
		withdrawAmount = +domVariables.repayLoanAmount.value
		if(withdrawAmount < 1000)return
		if(withdrawAmount > currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Soft loan').from.repayAmount)return
		
		
		transactionDetails = {
		type : transactionType,
		accName : 'UNIPAYS FINANCE',
		accNo : 'Soft Loan Repayment',
		bankName : 'UNIPAYS',
		amount : withdrawAmount,
		}
		
		}else if(loanType === 'Tuition loan'){
		
		withdrawAmount = +domVariables.repayLoanAmount.value
		if(withdrawAmount < 1000)return
		
		if(withdrawAmount > currentAccount.transactions.find((el) => el.status === 'active' && el.accName === 'Tuition loan').from.repayAmount)return
		
		
		transactionDetails = {
		type : transactionType,
		accName : 'UNIPAYS FINANCE',
		accNo : 'Tuition Loan Repayment',
		bankName : 'UNIPAYS',
		amount : withdrawAmount,
		}
		
		}
		updatePinPage(transactionDetails)
		domVariables.withdrawButton3El.textContent ="Pay"
		
		hidePage(domVariables.repayLoanPage)
		showPage(domVariables.withdrawPage3El)
		
		})
		
		
		//CURRENCY EXCHANGES
		
		const ratesConversion = async function (){
		const rates = await (fetch('https://v6.exchangerate-api.com/v6/d3b8e1b9775fc4abd08810b4/latest/NGN'))
		const rates1 = await rates.json()
		const {conversion_rates} = rates1
		const exchangeRates = []
		
		exchangeRates.push({currency : 'eur', name : 'Euro', amount :  +(1 / conversion_rates.EUR).toFixed(2)})
		exchangeRates.push({currency : 'cad', name : 'Canadian Dollar',  amount : +(1 / conversion_rates.CAD).toFixed(2)})
		exchangeRates.push({currency : 'usd', name : 'US Dollar', amount : +(1 / conversion_rates.USD).toFixed(2)})
		exchangeRates.push({currency : 'aud', name : 'Australian Dollar', amount : +(1 / conversion_rates.AUD).toFixed(2)})
		exchangeRates.push({currency : 'chf', name : 'Swiss Franc',  amount : +(1 / conversion_rates.CHF).toFixed(2)})
		exchangeRates.push({currency : 'gbp', name : 'Pound Sterling', amount : +(1 / conversion_rates.GBP).toFixed(2)})
		exchangeRates.push({currency : 'jpy', name : 'Japanese Yen', amount : +(1 / conversion_rates.JPY).toFixed(2)})
		
		
		domVariables.exchangeContainerEl.innerHTML = ''
		exchangeRates.forEach((el) =>{ 
		
		
		const html = `
		<div class="currency-exchange">
		<div>
		<p class="heading">${new Intl.NumberFormat('en-GB', {style : 'currency',
		currency : el.currency}).format(1)}</p>
		<p>${el.name}</p>
		</div>
		<div class="services-type-icon"><i class="fa-solid fa-arrows-left-right fa-2xl"></i></div>
		<div>
		<p class="heading">&#8358;${new Intl.NumberFormat('en-GB').format(el.amount)}
		<p >Nigerian Naira</p>
		</div>
		</div>`
		
		
		
		domVariables.exchangeContainerEl.insertAdjacentHTML('afterbegin', html)
		})
		
		}
		ratesConversion()
		
		
		//FOOD
		
		//HOME TO FOOD
		domVariables.toFoodEl.addEventListener('click', function(){
		hideHome()
		
		transactionType = 'Food Tickets'
		showPage(domVariables.foodPageEl)
		hidePage(domVariables.homeEl)
		})
		
		//FOOD TO HOME
		domVariables.foodPageToHomeEl.addEventListener('click', function(){
		hidePage(domVariables.foodPageEl)
		showPage(domVariables.homeEl)
		})
		
		const configRestaurant = function(restaurant){
		domVariables.restaurantName.textContent = restaurant.name
		domVariables.foodVenueEl.textContent = restaurant.venue
		domVariables.foodOpenDays.textContent = restaurant.days
		domVariables.foodOpenTime.textContent = restaurant.time
		}
		
		//TO BOLUID
		domVariables.toBoluidPageEl.addEventListener('click', function(){
		hidePage(domVariables.foodPageEl)
		showPage(domVariables.foodContinueEl)
		
		
		const restaurant = {name : 'Boluid', venue : 'ZIK Hall Cafateria', days : 'Opens everyday :', time : '7AM - 11PM',}
		restaurantName = restaurant.name
		restaurantVenue = restaurant.venue
		
		configRestaurant(restaurant)
		
		}) 
		
		//TO NEWFLAVA
		domVariables.toNewflavaPageEl.addEventListener('click', function(){
		hidePage(domVariables.foodPageEl)
		showPage(domVariables.foodContinueEl)
		
		const restaurant = {name : 'New Flava', venue : 'ZIK Hall Cafateria', days : 'Opens everyday :', time : '7AM - 11PM',}
		restaurantName = restaurant.name
		restaurantVenue = restaurant.venue
		
		configRestaurant(restaurant)
		
		}) 
		
		//TO ARCHIVES
		domVariables.toArchivePageEl.addEventListener('click', function(){
		hidePage(domVariables.foodPageEl)
		showPage(domVariables.foodContinueEl)
		
		const restaurant = {name : 'Archives', venue : 'Archives', days : 'Opens everyday :', time : '7AM - 9PM',}
		restaurantName = restaurant.name
		restaurantVenue = restaurant.venue
		
		configRestaurant(restaurant)
		
		}) 
		
		//TO KLAZZ
		domVariables.toKlazzPageEl.addEventListener('click', function(){
		hidePage(domVariables.foodPageEl)
		showPage(domVariables.foodContinueEl)
		
		const restaurant = {name : 'Klazz', venue : 'Tedder Hall Cafateria', days : 'Opens everyday :', time : '7AM - 11PM',}
		restaurantName = restaurant.name
		restaurantVenue = restaurant.venue
		
		configRestaurant(restaurant)
		
		}) 
		
		//TO MAMA ANAT
		domVariables.toMamaAnatPageEl.addEventListener('click', function(){
		hidePage(domVariables.foodPageEl)
		showPage(domVariables.foodContinueEl)
		
		const restaurant = {name : 'Mama Anat', venue : 'Abdullai Ganduje Hall', days : 'Opens weekdays :', time : '8AM - 6PM',}
		restaurantName = restaurant.name
		restaurantVenue = restaurant.venue
		
		configRestaurant(restaurant)
		
		}) 
		
		//BACK TO FOOD PAGE
		domVariables.backToFoodEl.addEventListener('click', function(){
		showPage(domVariables.foodPageEl)
		hidePage(domVariables.foodContinueEl)
		}) 
		
		//FOOD DECREMENT
		domVariables.foodDecrement.addEventListener('click', function(){
		if(+domVariables.foodNumber.textContent < 2)return
		domVariables.foodNumber.textContent = +domVariables.foodNumber.textContent - 1
		})
		
		//FOOD INCREMENT
		domVariables.foodIncrement.addEventListener('click', function(){
		domVariables.foodNumber.textContent = +domVariables.foodNumber.textContent + 1
		})
		
		//FOOD TO PIN
		domVariables.foodToPinEl.addEventListener('click', function(){
		hidePage(domVariables.foodContinueEl)
		showPage(domVariables.withdrawPage3El)
		
		ticketNumber = +domVariables.foodNumber.textContent
		withdrawAmount = ticketNumber * +domVariables.foodAmount.value
		
		pinPageDisplay({toName : 'Restaurant Name',
		toNumber : 'Number Of Tickets',
		organization : 'Bank Name',}
		)
		
		transactionDetails = {
		type : transactionType,
		accName : restaurantName.toUpperCase(),
		accNo : domVariables.foodNumber.textContent,
		bankName : 'UNIPAYS',
		amount : withdrawAmount,
		}
		
		domVariables.foodNumber.textContent = 1
		domVariables.foodAmount.value = ""
		updatePinPage(transactionDetails)
		domVariables.withdrawButton3El.textContent ="Buy Tickets"
		
		})
		
		
		//CHANGE PIN
		
		domVariables.toPinPage.addEventListener('click', function(){
		hideProfilePages()
		hideHome()
		hideMainAreaContent()
		hidePage(domVariables.homeEl)
		
		domVariables.menuEl.classList.remove('show-menu-arrange')
		domVariables.menuEl.classList.add('hide-menu-arrange')
		
		showPage(domVariables.changePinPage)
		
		domVariables.pinQuestion1.textContent = `${currentAccount.pinQuestion1}?`
		domVariables.pinQuestion2.textContent = `${currentAccount.pinQuestion2}?`
		
		})
		
		domVariables.changePinBack.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		
		domVariables.menuEl.classList.add('show-menu-arrange')
		domVariables.menuEl.classList.remove('hide-menu-arrange')
		
		
		hidePage(domVariables.changePinPage)
		
		})
		
		domVariables.changePinBtn.addEventListener('click', function(){
		if(domVariables.pinQuestionAnswer1.value.toLowerCase() === currentAccount.pinAnswer1 && domVariables.pinQuestionAnswer2.value.toLowerCase() === currentAccount.pinAnswer2 ){
		domVariables.pinQuestionAnswer1.value = ""
		domVariables.pinQuestionAnswer2.value = ""
		
		showPage(domVariables.setPinPage)
		hidePage(domVariables.changePinPage)
		
		
		
		
		}
		})
		
		domVariables.setPinBack.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		
		domVariables.menuEl.classList.add('show-menu-arrange')
		domVariables.menuEl.classList.remove('hide-menu-arrange')
		
		
		hidePage(domVariables.setPinPage)
		
		
		
		})
		
		domVariables.setPinBtn.addEventListener('click', function(){
		if(+domVariables.prevPinAnswer.value === currentAccount.pin && domVariables.newPinAnswer1.value === domVariables.newPinAnswer2.value){
		
		currentAccount.pin = +domVariables.newPinAnswer1.value
		domVariables.prevPinAnswer.value = ""
		domVariables.newPinAnswer1.value = ""
		domVariables.newPinAnswer2.value = ""
		
		localStorage.clear()
		setLocalStorage(accounts)
		
		
		}
		
		})
		
		//TRANSPORT
		
		
		
		
		domVariables.toTransport.addEventListener('click', function(){
		hideHome()
		
		domVariables.transportTicketAll.querySelectorAll('.student-loan-amount-container').forEach((el) => {el.style.backgroundColor = 'var(--BG-COLOR-LIGHT-1)'
		el.querySelector('.transport-ticket-number').textContent = 1
		})
		
		
		transactionType = "Transport Tickets"
		hidePage(domVariables.homeEl)
		showPage(domVariables.transportPage)
		})
		
		domVariables.transportToHome.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		hidePage(domVariables.transportPage)
		})
		
		domVariables.transportTicketAll.addEventListener('click', function(e){
		domVariables.transportTicketAll.querySelectorAll('.student-loan-amount-container').forEach((el) => el.style.backgroundColor = 'var(--BG-COLOR-LIGHT-1)')
		
		const clicked = e.target.closest('.student-loan-amount-container')
		
		
		if(!clicked)return
		
		clicked.style.backgroundColor = 'rgb(173, 181, 189)'
		
		clicked.querySelectorAll(`.destined-details input`).forEach((el) => {
		if(el.checked){
		transportType = el.value
		} 
		})
		
		const transportTextElements = clicked.querySelectorAll('.heading')
		destinationTransport = `${transportTextElements[0].textContent} / ${transportTextElements[1].textContent}`
		
		
		const amount = +clicked.querySelector(`.transport-${transportType}`).textContent
		let transportNumber = +clicked.querySelector('.transport-ticket-number').textContent
		
		clicked.querySelector('.increase').addEventListener('click', function(e){
		transportNumber = transportNumber + 1
		clicked.querySelector('.transport-ticket-number').textContent = transportNumber
		
		})
		
		clicked.querySelector('.decrease').addEventListener('click', function(e){
		if(transportNumber < 2)return
		transportNumber = transportNumber - 1
		clicked.querySelector('.transport-ticket-number').textContent = transportNumber
		
		})
		withdrawAmount = amount * transportNumber
		
		clicked.querySelector('.sign-in-btn').addEventListener('click', function(){
		hidePage(domVariables.transportPage)
		showPage(domVariables.withdrawPage3El)
		
		
		pinPageDisplay({toName : 'Transport Type',
		toNumber : 'Number Of Tickets',
		organization : 'Bank Name',}
		)
		
		transactionDetails = {
		type : transactionType,
		accName : transportType.toUpperCase(),
		accNo : transportNumber,
		bankName : 'UNIPAYS',
		amount : withdrawAmount,
		}
		
		
		
		updatePinPage(transactionDetails)
		domVariables.withdrawButton3El.textContent ="Buy Tickets"
		ticketNumber = transportNumber
		})
		
		
		
		})
		
		//SAVINGS PAGE
		
		domVariables.toSavingsPage.addEventListener('click', function(){
		hideHome()
		transactionType = "Smart Savings"
		
		savingsDate = Date.now()
		
		const day = savingsDate + (7 * 24 * 3600 * 1000)
		disburseDate = day
		
		domVariables.savingsDisburseDate.textContent = new Date(day).toLocaleDateString('en-GB', {month:'short', day:'2-digit', year:'numeric', weekday:'short',})
		
		
		
		domVariables.savingsSelect.textContent = 1
		domVariables.savingsDisburseAmount.textContent = 0
		domVariables.savingsDurationBtn.textContent = `${saveDisburseDate} days`
		hidePage(domVariables.homeEl)
		showPage(domVariables.savingsPage)
		
		})	
		
		
		domVariables.savingsPageBack.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		hidePage(domVariables.savingsPage)
		})
		
		
		domVariables.saveAmount.addEventListener('keyup', function(){
		withdrawAmount = +domVariables.saveAmount.value
		disburseAmount = +domVariables.saveAmount.value * 1.0157
		domVariables.savingsDisburseAmount.textContent = disburseAmount.toFixed(2)
		})
		
		
		domVariables.savingsIncrease.addEventListener('click', function(){
		domVariables.savingsSelect.textContent = +domVariables.savingsSelect.textContent + 1
		
		saveDisburseDate = 7 * 24 * 3600 * 1000 * +domVariables.savingsSelect.textContent
		
		const day = savingsDate + saveDisburseDate
		
		disburseDate = day
		domVariables.savingsDisburseDate.textContent = new Date(day).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})
		
		
		domVariables.savingsDurationBtn.textContent = `${saveDisburseDate / (24 * 3600 * 1000)} days`
		})
		
		domVariables.savingsDecrease.addEventListener('click', function(){
		if(+domVariables.savingsSelect.textContent < 2)return
		domVariables.savingsSelect.textContent = +domVariables.savingsSelect.textContent - 1
		saveDisburseDate = 7 * 24 * 3600 * 1000 * +domVariables.savingsSelect.textContent
		
		const day = savingsDate + saveDisburseDate
		
		disburseDate = day
		
		domVariables.savingsDisburseDate.textContent =  new Date(day).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'})
		
		
		domVariables.savingsDurationBtn.textContent = `${saveDisburseDate / (24 * 3600 * 1000)} days`
		})
		
		//SAVINGS TO PIN
		domVariables.savingsButton.addEventListener('click', function(){
		if(withdrawAmount < 1000)return
		
		hidePage(domVariables.savingsPage)
		showPage(domVariables.withdrawPage3El)
		
		
		pinPageDisplay({toName : 'Disburse Amount',
		toNumber : 'Disburse Date',
		organization : 'Bank Name',}
		)
		
		transactionDetails = {
		type : transactionType,
		accName : disburseAmount.toFixed(2),
		accNo : new Date(disburseDate).toLocaleDateString('en-GB', {year:'numeric', month:'short', weekday:'short', day:'2-digit'}),
		bankName : 'UNIPAYS',
		amount : withdrawAmount,
		}
		
		
		domVariables.saveAmount.value = ""
		updatePinPage(transactionDetails)
		domVariables.withdrawButton3El.textContent ="Save"
		
		
		})
		
		//BOOKSHOP
		
		
		domVariables.toBookPage.addEventListener('click', function(){
		hideHome()
		
		transactionType = "Buy Books"
		hidePage(domVariables.homeEl)
		showPage(domVariables.bookPage)
		
		bookNumber = 1
		domVariables.bookNumber.textContent = bookNumber
		
		})
		
		domVariables.bookToHomePage.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		hidePage(domVariables.bookPage)
		
		})
		
		
		domVariables.bookIncrease.addEventListener('click', function(){
		bookNumber = +domVariables.bookNumber.textContent + 1
		domVariables.bookNumber.textContent = bookNumber
		
		})
		
		domVariables.bookDecrease.addEventListener('click', function(){
		if(+domVariables.bookNumber.textContent < 2)return
		bookNumber = +domVariables.bookNumber.textContent - 1
		domVariables.bookNumber.textContent = bookNumber
		
		})
		
		
		domVariables.bookButton.addEventListener('click', function(){
		withdrawAmount = bookNumber * +domVariables.bookAmount.value
		bookName = domVariables.bookName.value
		
		if(withdrawAmount < 200)return
		
		hidePage(domVariables.bookPage)
		showPage(domVariables.withdrawPage3El)
		
		
		pinPageDisplay({toName : 'Book Name',
		toNumber : 'Number Of Books',
		organization : 'Bank Name',}
		)
		
		transactionDetails = {
		type : transactionType,
		accName : bookName,
		accNo : bookNumber,
		bankName : 'UNIPAYS BOOK',
		amount : withdrawAmount,
		}
		
		domVariables.bookName.value = ""
		domVariables.bookAmount.value = ""
		updatePinPage(transactionDetails)
		domVariables.withdrawButton3El.textContent ="Save"
		
		
		})
		
		
		//FUND ACCOUNT PAGE
		
		
		domVariables.toFundPage.addEventListener('click', function(){
		hideHome()
		
		transactionType = 'Fund Account'
		
		if(Date.now() >= currentAccount.nextFund){
		currentAccount.fundNumber = 0
		}
		
		if(currentAccount.fundNumber === 0){
		domVariables.fundPageBtn.textContent = 'Continue'
		
		}else if(currentAccount.fundNumber === 1){
		domVariables.fundPageBtn.textContent = `Virtual Funding is limited to once in 6 hours`
		
		}
		
		hidePage(domVariables.homeEl)
		showPage(domVariables.fundPage)
		})
		
		domVariables.fundPageToHome.addEventListener('click', function(){
		domVariables.fundAmountInput.value = ""
		
		
		showPage(domVariables.homeEl)
		hidePage(domVariables.fundPage)
		})
		
		domVariables.fundPageBtn.addEventListener('click', function(){
		
		if(domVariables.fundPageBtn.textContent === 'Continue'){
		withdrawAmount = +domVariables.fundAmountInput.value
		if(withdrawAmount < 50 || withdrawAmount > 10000)return
		
		const virtualNumber = Math.trunc(Math.random() * 10) + 1
		const virtualAccountNumber = Math.trunc(Math.random() * 10000000000) + 1
		
		withdrawAccount = {accountName : `Wema Unipays Gateway ${virtualNumber}`,
		accountNumber : virtualAccountNumber,
		bankName : 'UNIPAYS',}
		
		
		domVariables.fundNumber.textContent = virtualNumber
		domVariables.fundAccountNumber.textContent = virtualAccountNumber
		
		domVariables.fundAmountText.textContent = `NGN${withdrawAmount}`
		
		
		
		
		
		
		showPage(domVariables.fundContinuePage)
		hidePage(domVariables.fundPage)
		}else if(domVariables.fundPageBtn.textContent === `Virtual Funding is limited to once in 6 hours`){
		hidePage(domVariables.fundPage)
		showPage(domVariables.homeEl)
		}
		
		})
		
		domVariables.fundContinueBack.addEventListener('click', function(){
		if(domVariables.fundContinuePageBtn.textContent === 'I have sent the money' || domVariables.fundContinuePageBtn.textContent === 'Virtual Funding is limited to once in 6 hours'){
		
		hidePage(domVariables.fundContinuePage)
		showPage(domVariables.fundPage)
		}
		})
		
		
		
		domVariables.fundContinuePageBtn.addEventListener('click', function(){
		if(domVariables.fundContinuePageBtn.textContent === 'I have sent the money' && currentAccount.fundNumber === 0){
		
		domVariables.fundAmountInput.value = ""
		showPage(domVariables.fundVerify)
		domVariables.fundContinuePageBtn.textContent = `Verifying Transaction...`
		
		setTimeout(() => {
		domVariables.fundContinuePageBtn.textContent = 'Payment Confirmed'
		domVariables.fundVerify.innerHTML = `
		<div class="services-type-icon" id="success-icon"><i class="fa-solid fa-check fa-2xl"></i></div>
		`
		}, 6000)
		
		}else if(domVariables.fundContinuePageBtn.textContent === 'Payment Confirmed'){
		currentAccount.fundNumber = 1
		const now = Date.now()
		currentAccount.nextFund = now + (6 * 60 * 60 * 1000)
		
		domVariables.fundContinuePageBtn.textContent = 'Redirecting...'
		setTimeout(() => {
		domVariables.fundContinuePageBtn.textContent = 'I have sent the money'
		domVariables.fundAmountInput.value = ""
		
		domVariables.fundVerify.innerHTML = `<div class="show" id="fund-verify">
		<div class=" currency-exchange fund-verify" >
		<div class="fund-account">
		
		</div>
		</div>
		</div>
		`
		hidePage(domVariables.fundVerify)
		
		hidePage(domVariables.fundContinuePage)
		showPage(domVariables.homeEl)
		
		
		}, 2000)
		
		
		currentAccount.transactions.push(new TransactFund(createTransactDetails(currentAccount, withdrawAccount, withdrawAmount)));
		
		currentBalance = calcBalance(currentAccount);
		updateBalance(currentBalance);
		
		localStorage.clear()
		setLocalStorage(accounts)
		
		}
		
		})
		
		
		//UNIPAYS TRANSFER
		domVariables.toUnipaysPage.addEventListener('click', function(){
		hideHome()
		
		transactionType = 'Unipays Transfer'
		domVariables.unipaysName.textContent = 'Please enter details'
		
		hidePage(domVariables.homeEl)
		showPage(domVariables.unipaysPage)
		})
		
		domVariables.unipaysToHome.addEventListener('click', function(){
		showPage(domVariables.homeEl)
		hidePage(domVariables.unipaysPage)
		})
		
		domVariables.unipaysMatricInput.addEventListener('keyup', function(){
		domVariables.unipaysName.textContent = 'Please enter Matric Number';
		
		domVariables.unipaysName.value = "";
		if(domVariables.unipaysMatricInput.value.length > 1){
		showPage(domVariables.unipaysSpinner)
		hidePage(domVariables.unipaysName)
		}
		
		withdrawAccount = accounts.find((el) => el.matricNo === +domVariables.unipaysMatricInput.value)
		
		if(domVariables.unipaysMatricInput.value.length === 6){
		setTimeout(() => {domVariables.withdrawAccNameEl.textContent = withdrawAccount.accountName
		hidePage(domVariables.unipaysSpinner)
		domVariables.unipaysName.textContent = `${withdrawAccount.firstName} ${withdrawAccount.lastName}`
		showPage(domVariables.unipaysName)
		
		}, 500);
		}
		
		})
		
		
		domVariables.unipaysBtn.addEventListener('click', function(){
		if(withdrawAccount === currentAccount){
		domVariables.unipaysName.textContent = 'You cannot transfer money to yourself'
		}
		if(domVariables.unipaysName.classList.contains('hide') || domVariables.unipaysName.textContent === 'Please enter details' || domVariables.unipaysName.textContent === 'Please enter Matric Number')return
		domVariables.unipaysMatricInput.value = ""
		hidePage(domVariables.unipaysPage)
		showPage(domVariables.withdrawPage2El)
		})
		
		
		//DOWNLOAD SUCCESS RECEIPT
		
		
		domVariables.downloadSuccessReceipt.addEventListener('click', function(){
		
		//	domVariables.downloadSuccessReceipt.style.color = "red"
		
		const receipt = domVariables.successReceipt
		
		const receiptNumber = new Date().toISOString().slice(-3)
		
		const opt = {
		margin: 2.5,
		filename: `receipt${receiptNumber}.pdf`,
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 6 },
		jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
		};
		
		html2pdf().from(receipt).set(opt).save();
		})
		
		
		//ACTIVE TICKETS
		
		
		//TO ACTIVE TICKETS PAGE
		domVariables.toActiveTickets.addEventListener('click', function(){
		hideProfilePages()
		hideHome()
		hideMainAreaContent()
		domVariables.activeTicketsContainer.innerHTML = ""
		
		const activeTickets = currentAccount.transactions.filter((el) => el.status === 'active')
		
		activeTickets.forEach((el) => {
		
		if(el.type === 'Food Tickets'){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Account Name :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Restautant Name :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Venue :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Number of Tickets :</p> <span>${el.to.ticketNo}</span></div>
		
		<div class="details-arrange"><p>Ticket Amount :</p> <span>NGN${Math.abs(el.to.amount / el.to.ticketNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.activeTicketsContainer.insertAdjacentHTML('afterbegin', html)
		
		}else if(el.type === 'Transport Tickets'){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Number Of Tickets :</p> <span >${el.to.receiverAccNo}</span></div>
		<div class="details-arrange"><p>Destination :</p> <span>${el.to.ticketNo}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Transport Type :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Ticket Amount :</p> <span>NGN${Math.abs(el.to.amount / el.to.receiverAccNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.activeTicketsContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}else if(el.type === 'Buy Books'){
		
		const html = `<div class="transaction-history">
		<p>${el.type}</p>
		<div class="details-container">
		<div class="details-arrange"><p>Ticket Status :</p> <span >${el.status.toUpperCase()}</span></div>
		
		<div class="details-arrange"><p>Number Of Books :</p> <span >${el.to.receiverAccNo}</span></div>
		
		<div class="details-arrange"><p>Bank Name :</p> <span>${el.to.receiverBankName}</span></div>
		<div class="details-arrange"><p>Name Of Book :</p> <span>${el.to.receiverAccName}</span></div>
		<div class="details-arrange"><p>Amount Of Book :</p> <span>NGN${Math.abs(el.to.amount / el.to.receiverAccNo)}</span></div>
		<div class="details-arrange"><p>Transaction ID :</p> <span>${el.to.id}</span></div>
		<div class="details-arrange"><p>Date :</p> <span>${formattedDate(el.date)}</span></div>
		</div>
		</div>
		`
		
		domVariables.activeTicketsContainer.insertAdjacentHTML('afterbegin', html)
		
		
		}
		
		})
		
		domVariables.menuEl.classList.remove('show-menu-arrange')
		domVariables.menuEl.classList.add('hide-menu-arrange')
		
		
		hidePage(domVariables.homeEl)
		showPage(domVariables.activeTicketsPage)
		
		})
		
		
		//ACTIVE TICKETS PAGE TO MENU
		domVariables.activeTicketsBack.addEventListener('click', function(){
		domVariables.menuEl.classList.add('show-menu-arrange')
		domVariables.menuEl.classList.remove('hide-menu-arrange')
		
		
		showPage(domVariables.homeEl)
		hidePage(domVariables.activeTicketsPage)
		})
		
		//setLocalStorage(accounts)
		
		
		
		/*	const hideMainAreaContent = function(){
		const allMain = [domVariables.searchTransactionsPage, domVariables.useActiveTicketPage, domVariables.withdrawPage1El, domVariables.withdrawPage2El, domVariables.withdrawPage3El, domVariables.withdrawPage4El, domVariables.dataPageEl, domVariables.airtimePageEl, domVariables.hostelPage, domVariables.toSchoolFeesPageEl, domVariables.loanContinuePageEl, domVariables.loanPageEl, domVariables.loanHistoryPage, domVariables.repayLoanPage, domVariables.foodPageEl, domVariables.foodContinueEl, domVariables.transportPage, domVariables.savingsPage, domVariables.bookPage, domVariables.fundContinuePage, domVariables.fundPage, domVariables.unipaysPage, domVariables.exchangePageEl ]
		allMain.forEach((el) => hidePage(el))
		
		}*/
		