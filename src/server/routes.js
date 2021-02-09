const _ = require("lodash");
const Discord = require("discord.js");
const express = require("express");
const router = express.Router();

router.setserver = (guild, db) => {
  /* root */
  router.get("/", (req, res) => {
    res.send(
      `Serving as ${guild.me.user.username} (${guild.me.user.id}) on server ${guild.name} (${guild.id})`
    );
  });

  /* Properties */
  /* 
    .afkChannel
    AFK voice channel for this guild
    Type: VoiceChannel
  */
  router.get("/afkChannel", (req, res) => {
    res.json(_.pick(guild, ["afkChannel"]));
  });

  /*
    .afkChannelID
    The ID of the voice channel where AFK members are moved
    Type: Snowflake
  */
  router.get("/afkChannelID", (req, res) => {
    res.json(_.pick(guild, ["afkChannelID"]));
  });

  /*
    .afkTimeout
    The time in seconds before a user is counted as "away from keyboard"
    Type: ?number
  */
  /*
    .applicationID
    The ID of the application that created this guild (if applicable)
    Type: ?Snowflake
  */
  router.get("/applicationID", (req, res) => {
    res.json(_.pick(guild, "applicationID"));
  });
  /*
    .approximateMemberCount
    The approximate amount of members the guild has

    You will need to fetch the guild using Guild#fetch if you want to receive this parameter
    Type: ?number

  */
  /*
    .approximatePresenceCount
    The approximate amount of presences the guild has

    You will need to fetch the guild using Guild#fetch if you want to receive this parameter
    Type: ?number

  */
  /*
    .available
    Whether the guild is available to access. If it is not available, it indicates a server outage

    Type: boolean

  */
  router.get("/available", (req, res) => {
    res.json(_.pick(guild, ["available"]));
  });
  /*
    .banner
    The hash of the guild banner

    Type: ?string
  */
  /*
    .channels
    A manager of the channels belonging to this guild

    Type: GuildChannelManager
  */
  router.get("/channels", (req, res) => {
    res.json(_.pick(guild.channels, "cache"));
  });

  /*
    .client
    The client that instantiated this

    Type: Client
  */
  router.get("/client", (req, res) => {
    res.json(_.pick(guild, "client"));
  });

  /*
    .createdAt
    The time the guild was created at

    Type: Date
  */
  /*
    .createdTimestamp
    The timestamp the guild was created at

    Type: number
  */
  /*
    .defaultMessageNotifications
    The value set for the guild's default message notifications

    Type: DefaultMessageNotificationsnumber
  */
  /*
    .deleted
    Whether the bot has been removed from the guild

    Type: boolean
  */
  /*
    .description
    The description of the guild, if any

    Type: ?string
  */
  /*
    .discoverySplash
    The hash of the guild discovery splash image

    Type: ?string
  */
  /*
    .emojis
    A manager of the emojis belonging to this guild

    Type: GuildEmojiManager
  */
  router.get("/emojis", (req, res) => {
    res.json(guild.emojis.cache.array());
  });

  /*
    .explicitContentFilter
    The explicit content filter level of the guild

    Type: ExplicitContentFilterLevel
  */
  /*
    .features
    An array of guild features partnered guilds have enabled

    Type: Array<Features>
  */
  /*
    .icon
    The hash of the guild icon

    Type: string
  */
  /*
    .id
    The Unique ID of the guild, useful for comparisons

    Type: Snowflake
  */
  router.get("/id", (req, res) => {
    res.json(guild.id);
  });
  /*
    .joinedAt
    The time the client user joined the guild

    Type: Date
  */
  /*
    .joinedTimestamp
    The timestamp the client user joined the guild at

    Type: number
  */
  /*
    .large
    Whether the guild is "large" (has more than large_threshold members, 50 by default)

    Type: boolean
  */
  /*
    .maximumMembers
    The maximum amount of members the guild can have

    Type: ?number
  */
  /*
    .maximumPresences
    The maximum amount of presences the guild can have

    You will need to fetch the guild using Guild#fetch if you want to receive this parameter
    Type: ?number
  */
  /*
    .me
    The client user as a GuildMember of this guild

    Type: ?GuildMember
  */
  router.get("/me", (req, res) => {
    res.json(guild.me);
  });

  /*
    .memberCount
    The full amount of members in this guild

    Type: number
  */
  router.get("/memberCount", (req, res) => {
    res.json(guild.memberCount);
  });

  /*
    .members
    A manager of the members belonging to this guild

    Type: GuildMemberManager
  */
  router.get("/members", (req, res) => {
    res.json(guild.members.cache.array());
  });

  /*
    .mfaLevel
    The required MFA level for the guild

    Type: number
  */
  /*
    .name
    The name of the guild

    Type: string
  */
  /*
    .nameAcronymREAD-ONLY
    The acronym that shows up in place of a guild icon.

    Type: string
  */
  /*
    .ownerREAD-ONLY
    The owner of the guild

    Type: ?GuildMember
  */
  /*
    .ownerID
    The user ID of this guild's owner

    Type: Snowflake
  */
  /*
    .partneredREAD-ONLY
    If this guild is partnered

    Type: boolean
  */
  /*
    .preferredLocale
    The preferred locale of the guild, defaults to en-US

    Type: string
  */
  /*
    .premiumSubscriptionCount
    The total number of boosts for this server

    Type: ?number
  */
  /*
    .premiumTier
    The premium tier on this guild

    Type: PremiumTier
  */
  /*
    .presences
    A manager of the presences belonging to this guild

    Type: PresenceManager
  */
  /*
    .publicUpdatesChannelREAD-ONLY
    Public updates channel for this guild

    Type: ?TextChannel
  */
  /*
    .publicUpdatesChannelID
    The ID of the community updates channel for the guild

    Type: ?Snowflake
  */
  /*
    .region
    The region the guild is located in

    Type: string
  */
  /*
    .roles
    A manager of the roles belonging to this guild

    Type: RoleManager
  */
  /*
    .rulesChannelREAD-ONLY
    Rules channel for this guild

    Type: ?TextChannel
  */
  /*
    .rulesChannelID
    The ID of the rules channel for the guild

    Type: ?Snowflake
  */
  /*
    .shardREAD-ONLY
    The Shard this Guild belongs to.

    Type: WebSocketShard
  */
  /*
    .shardID
    The id of the shard this Guild belongs to.

    Type: number
  */
  /*
    .splash
    The hash of the guild invite splash image

    Type: ?string
  */
  /*
    .systemChannelREAD-ONLY
    System channel for this guild

    Type: ?TextChannel
  */
  /*
    .systemChannelFlags
    The value set for the guild's system channel flags

    Type: Readonly<SystemChannelFlags>
  */
  /*
    .systemChannelID
    The ID of the system channel

    Type: ?Snowflake
  */
  /*
    .vanityURLCode
    The vanity invite code of the guild, if any

    Type: ?string
  */
  /*
    .vanityURLUses
    The use count of the vanity URL code of the guild, if any

    You will need to fetch this parameter using Guild#fetchVanityData if you want to receive it
    Type: ?number
  */
  /*
    .verificationLevel
    The verification level of the guild

    Type: VerificationLevel
  */
  /*
    .verifiedREAD-ONLY
    If this guild is verified

    Type: boolean
  */
  /*
    .voiceREAD-ONLY
    The voice state for the client user of this guild, if any

    Type: ?VoiceState
  */
  /*
    .voiceStates
    A manager of the voice states of this guild

    Type: VoiceStateManager
  */
  /*
    .widgetChannelREAD-ONLY
    Widget channel for this guild

    Type: ?TextChannel
  */
  /*
    .widgetChannelID
    The widget channel ID, if enabled

    Type: ?string
  */
  /*
    .widgetEnabled
    Whether widget images are enabled on this guild

    Type: ?boolean
    */

  /* Server Interactions */
  /* /message */
  router.post("/message", (req, res, next) => {
    guild.channels.cache
      .get(req.body.channel)
      .send(req.body.message)
      .then((pr) => res.send(pr))
      .catch((err) => res.send(err.message));
  });

  /* 
    /poll 
    Example object:
    {
      channel:string,
      title:string,
      time:int,
      question:string,
      questions:array[{emoji:string, question:string}]
    }
  */
  router.post("/poll", async (req, res) => {
    const poll = req.body;
    poll.db = await db.Poll.create({
      channel: poll["channel"],
      title: poll["title"],
      question: poll["question"],
      answers: poll["answers"],
    });

    const embed = new Discord.MessageEmbed()
      .setTitle(poll.db["title"])
      .setDescription(poll.db["question"])
      .addFields(poll.db["answers"]);

    guild.channels.cache
      .get(poll.db["channel"])
      .send(embed)
      .then((message) => {
        res.send(message);

        const filter = (reaction, user) => {
          return reaction.emoji.name === "👍";
        };

        message
          .awaitReactions(filter, {
            time: req.body["time"],
          })
          .then((collected) => console.log(collected))
          .catch((err) => console.log(err.message));
      })
      .catch((err) => res.send(err.message));
  });

  return router;
};

module.exports = router;
