# Description

To improve beefy ecosystem and have a simplify the way to broadcast alarms or messages, we build a modular and flexible API that receive message with specification of how to broadcasting and it.

# Integrations

Current integration and future integrations

- [x] Discord
- [ ] Twitter
- [ ] Telegram

# Endpoints

## create a message

```js
/**
 * Request
 * POST /broadcasts?apikey="this is secret apikey"
 */
{
	type: 'warning', // ( info | warning | error | fatal )
	title: 'subsidy is lower than 10%',
	message: 'be care on this things be cause jessy can do a disaster on the lab without me',
	platforms: ['discord'], // ( discord | telegram | twitter )
}
/**
 * Response
 */
{
	success: true,
	message: 'broadcasting the message my friend'
}
```
