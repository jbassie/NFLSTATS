from mongoengine import EmbeddedDocumentField, DecimalField, Document, StringField, UUIDField, IntField, BooleanField, DateTimeField, EmbeddedDocument, EmbeddedDocumentListField


class intreturns(EmbeddedDocument):
    longest = IntField()
    longesttouchdown = IntField()
    avgyards = DecimalField()
    returns = IntField()
    touchdowns = IntField()
    yards = IntField()


class passing(EmbeddedDocument):
    longest = IntField()
    longesttouchdown = IntField()
    airyards = IntField()
    attempts = IntField()
    avgyards = DecimalField()
    battedpasses = IntField()
    blitzes = IntField()
    cmppct = DecimalField()
    completions = IntField()
    defendedpasses = IntField()
    droppedpasses = IntField()
    grossyards = IntField()
    hurries = IntField()
    inttouchdowns = IntField()
    interceptions = IntField()
    knockdowns = IntField()
    netyards = DecimalField()
    ontargetthrows = IntField()
    pockettime = IntField()
    poorthrows = IntField()
    rating = DecimalField()
    redzoneattempts = IntField()
    sackyards = IntField()
    sacks = IntField()
    spikes = IntField()
    throwaways = IntField()
    touchdowns = IntField()
    yards = IntField()


class receiving(EmbeddedDocument):
    longest = IntField()
    longesttouchdown = IntField()
    airyards = IntField()
    avgyards = DecimalField()
    brokentackles = IntField()
    catchablepasses = IntField()
    droppedpasses = IntField()
    receptions = IntField()
    redzonetargets = IntField()
    targets = IntField()
    touchdowns = IntField()
    yards = IntField()
    yardsaftercatch = IntField()
    yardsaftercontact = IntField()


class defense(EmbeddedDocument):
    assists = IntField()
    battedpasses = IntField()
    blitzes = IntField()
    combined = IntField()
    defcomps = IntField()
    deftargets = IntField()
    forcedfumbles = IntField()
    fourthdownstops = IntField()
    fumblerecoveries = IntField()
    hurries = IntField()
    interceptions = IntField()
    knockdowns = IntField()
    miscassists = IntField()
    miscforcedfumbles = IntField()
    miscfumblerecoveries = IntField()
    misctackles = IntField()
    missedtackles = IntField()
    passesdefended = IntField()
    qbhits = IntField()
    sackyards = IntField()
    sacks = IntField()
    safeties = IntField()
    spassists = IntField()
    spblocks = IntField()
    spforcedfumbles = IntField()
    spfumblerecoveries = IntField()
    sptackles = IntField()
    tackles = IntField()
    threeandoutsforced = IntField()
    tloss = IntField()
    tlossyards = IntField()


class thirddown(EmbeddedDocument):
    attempts = IntField()
    pct = DecimalField()
    successes = IntField()


class fourthdown(EmbeddedDocument):
    attempts = IntField()
    pct = DecimalField()
    successes = IntField()


class goaltogo(EmbeddedDocument):
    attempts = IntField()
    pct = DecimalField()
    successes = IntField()


class redzone(EmbeddedDocument):
    attempts = IntField()
    pct = DecimalField()
    successes = IntField()


class kicks(EmbeddedDocument):
    attempts = IntField()
    blocked = IntField()
    made = IntField()
    pct = DecimalField()


class fieldgoals(EmbeddedDocument):
    longest = IntField()
    attempts = IntField()
    attempts19 = IntField()
    attempts29 = IntField()
    attempts39 = IntField()
    attempts49 = IntField()
    attempts50 = IntField()
    avgyards = DecimalField()
    blocked = IntField()
    made = IntField()
    made19 = IntField()
    made29 = IntField()
    made39 = IntField()
    made49 = IntField()
    made50 = IntField()
    missed = IntField()
    pct = DecimalField()
    yards = IntField()


class punts(EmbeddedDocument):
    longest = IntField()
    attempts = IntField()
    avghangtime = DecimalField()
    avgnetyards = DecimalField()
    avgyards = DecimalField()
    blocked = IntField()
    hangtime = IntField()
    inside20 = IntField()
    netyards = IntField()
    returnyards = IntField()
    touchbacks = IntField()
    yards = IntField()


class rushing(EmbeddedDocument):
    longest = IntField()
    longesttouchdown = IntField()
    attempts = IntField()
    avgyards = DecimalField()
    brokentackles = IntField()
    kneeldowns = IntField()
    redzoneattempts = IntField()
    scrambles = IntField()
    tlost = IntField()
    tlostyards = IntField()
    touchdowns = IntField()
    yards = IntField()
    yardsaftercontact = IntField()


class kickreturns(EmbeddedDocument):
    longest = IntField()
    longesttouchdown = IntField()
    avgyards = DecimalField()
    faircatches = IntField()
    returns = IntField()
    touchdowns = IntField()
    yards = IntField()


class puntreturns(EmbeddedDocument):
    longest = IntField()
    longesttouchdown = IntField()
    avgyards = DecimalField()
    faircatches = IntField()
    returns = IntField()
    touchdowns = IntField()
    yards = IntField()


class record(EmbeddedDocument):
    gamesplayed = IntField()


class conversions(EmbeddedDocument):
    defenseattempts = IntField()
    defensesuccesses = IntField()
    passattempts = IntField()
    passsuccesses = IntField()
    rushattempts = IntField()
    rushsuccesses = IntField()
    turnoversuccesses = IntField()


class kickoffs(EmbeddedDocument):
    endzone = IntField()
    inside20 = IntField()
    kickoffs = IntField()
    onsideattempts = IntField()
    onsidesuccesses = IntField()
    outofbounds = IntField()
    returnyards = IntField()
    returned = IntField()
    squibkicks = IntField()
    touchbacks = IntField()
    yards = IntField()


class fumbles(EmbeddedDocument):
    ezrectds = IntField()
    forcedfumbles = IntField()
    fumbles = IntField()
    lostfumbles = IntField()
    opprec = IntField()
    opprectds = IntField()
    opprecyards = IntField()
    outofbounds = IntField()
    ownrec = IntField()
    ownrectds = IntField()
    ownrecyards = IntField()


class penalties(EmbeddedDocument):
    firstdowns = IntField()
    penalties = IntField()
    yards = IntField()


class touchdowns(EmbeddedDocument):
    fumblereturn = IntField()
    intreturn = IntField()
    kickreturn = IntField()
    other = IntField()
    passing = IntField()
    puntreturn = IntField()
    rush = IntField()
    total = IntField()
    totalreturn = IntField()


class interceptions(EmbeddedDocument):
    interceptions = IntField()
    returnyards = IntField()
    returned = IntField()


class firstdowns(EmbeddedDocument):
    passing = IntField()
    penalty = IntField()
    rush = IntField()
    total = IntField()


class SeasonStatTeam(Document):
    _id = StringField(primary_key=True)
    teamid = StringField()
    seasonid = StringField()
    games_played = IntField()
    intreturns = EmbeddedDocumentField(intreturns)
    passing = EmbeddedDocumentField(passing)
    receiving = EmbeddedDocumentField(receiving)
    defense = EmbeddedDocumentField(defense)
    thirddown = EmbeddedDocumentField(thirddown)
    fourthdown = EmbeddedDocumentField(fourthdown)
    goaltogo = EmbeddedDocumentField(goaltogo)
    redzone = EmbeddedDocumentField(redzone)
    kicks = EmbeddedDocumentField(kicks)
    fieldgoals = EmbeddedDocumentField(fieldgoals)
    punts = EmbeddedDocumentField(punts)
    rushing = EmbeddedDocumentField(rushing)
    kickreturns = EmbeddedDocumentField(kickreturns)
    puntreturns = EmbeddedDocumentField(puntreturns)
    record = EmbeddedDocumentField(record)
    conversions = EmbeddedDocumentField(conversions)
    kickoffs = EmbeddedDocumentField(kickoffs)
    fumbles = EmbeddedDocumentField(fumbles)
    penalties = EmbeddedDocumentField(penalties)
    touchdowns = EmbeddedDocumentField(touchdowns)
    interceptions = EmbeddedDocumentField(interceptions)
    firstdowns = EmbeddedDocumentField(firstdowns)

    meta = {"collection": "SeasonStatTeam"}  # Specify the collection name

    def __str__(self):
        # You can customize this string representation
        return "SeasonStatTeam: " + str(self.id)

    def save(self, *args, **kwargs):
        if hasattr(self, 'teamid') and hasattr(self, 'seasonid'):
            self._id = f"{self.teamid}_{self.seasonid}"
        super(SeasonStatTeam, self).save(*args, **kwargs)
