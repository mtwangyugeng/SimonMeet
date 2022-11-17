<script context=module>
    function getInitials(name) {
        const words = name.split(/\s+/);
        if(words.length === 0) return "";
        if(words.length === 1) return words[0].substring(0, 2);
        return words[0].charAt(0) + words[1].charAt(0)
    }
</script>

<script>
    export let name;

    const initials = getInitials(name).toUpperCase()

    const colors = ['#616161', '#3F51B5', '#4CAF50', '#FFA000', '#795548', '#E91E63', '#2F80FF', '#8BC34A', '#F57C00', '#673AB7', '#009688', '#FBC02D'];
    // derive a color from the first letter
    const colorIndex = (initials?.codePointAt(0) || 0) % colors.length;
    const avatarColor = colors[colorIndex];
</script>


<div style="background: {avatarColor}" class="avatar">
    {initials}
</div>

<style>
    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 8%;
        font-weight: 500;
        font-size: 1.8rem;
        border-radius: 50%;

        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>