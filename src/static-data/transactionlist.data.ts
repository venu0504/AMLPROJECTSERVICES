import Color from 'color';
import theme from '../@vex/utils/tailwindcss';

export const aioTableLabels = [
  {
    text: 'New',
    backgroundColor: Color(theme.colors.green['500']).fade(0.9),
    color: theme.colors.green['500']
  },
  {
    text: 'Lead',
    backgroundColor: Color(theme.colors.cyan['500']).fade(0.9),
    color: theme.colors.cyan['500']
  },
  {
    text: 'In Progress',
    backgroundColor: Color(theme.colors.teal['500']).fade(0.9),
    color: theme.colors.teal['500']
  },
  {
    text: 'Completed',
    backgroundColor: Color(theme.colors.purple['500']).fade(0.9),
    color: theme.colors.purple['500']
  },
];

export const TransactionlistData = [
  {
    id: 0,
    transactionid: '1',
    transactiondate: '19/11/2019',
    transactiondescription: 'qr transfer',
	 transactiondeposit: '$ 500',
	  transactionwithdrawl: '$ 200',
	   transactionbalance: '$ 300'
	   
  }
];
