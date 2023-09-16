<script lang="ts">
	import Icon from "@iconify/svelte";

    export let user: {
        name: string;
        avatarPath: string;
        href?: string;
        description?: string;
        socials?: {
            twitter?: string;
            twitch?: string;
            youtube?: string;
            instagram?: string;
            github?: string;
            website?: string;
        }
    };
    export let circleMask = true;

    const { name, avatarPath, href, description, socials } = user;
</script>

<div class="flex flex-col items-center w-64">
    <img src={avatarPath} class="h-24 mask" class:mask-circle={circleMask} alt="{name} avatar" />
    <a {href} class="text-center font-bold mt-4" class:link={href} class:link-hover={href}>{name}</a>
    {#if description}
        <p class="text-center">{description}</p>
    {/if}
    {#if socials}
        <div class="flex gap-1">
            {#if socials.twitter}
                <a href={socials.twitter}>
                    <Icon icon="bxl:twitter" width="24" height="24" />
                </a>
            {/if}
            {#if socials.twitch}
                <a href={socials.twitch}>
                    <Icon icon="bxl:twitch" width="24" height="24" />
                </a>
            {/if}
            {#if socials.youtube}
                <a href={socials.youtube}>
                    <Icon icon="bxl:youtube" width="24" height="24" />
                </a>
            {/if}
            {#if socials.instagram}
                <a href={socials.instagram}>
                    <Icon icon="bxl:instagram-alt" width="24" height="24" />
                </a>
            {/if}
            {#if socials.github}
                <a href={socials.github}>
                    <Icon icon="bxl:github" width="24" height="24" />
                </a>
            {/if}
            {#if socials.website}
                <a href={socials.website}>
                    <Icon icon="bx:world" width="24" height="24" />
                </a>
            {/if}
        </div>
    {/if}
</div>